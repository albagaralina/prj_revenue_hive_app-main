from django.contrib.auth.decorators import login_required
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from server.settings import EMAIL_HOST_USER, EMAIL_FROM
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_str, force_bytes

from django.urls import reverse, reverse_lazy
from django.shortcuts import render, redirect, get_object_or_404
from django.views import generic
from django.views.generic.detail import DetailView
from django.db import models
from django.db.models import fields
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.http import HttpResponseBadRequest
from django.contrib.auth import get_user_model

from app_profiles.models import Profile
from .models import User
from .forms import UserForm, ProfileEditForm, LoginForm  # Import your custom UserForm
import logging

logger = logging.getLogger(__name__)

# PW resetting
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.views import PasswordResetView as DjangoPasswordResetView, PasswordResetConfirmView as DjangoPasswordResetConfirmView, PasswordResetDoneView

from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


def login_user(request):
    logger.debug("Entering login_user view")

    # Initialize logout_flag with a default value
    logout_flag = False

    if request.method == 'POST':
        logout_flag = request.GET.get('logout', False)
        login_form = LoginForm(request.POST)
        register_form = UserForm()
        if login_form.is_valid():
            username = login_form.cleaned_data.get('username')
            password = login_form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('posts:post_list')
            else:
                messages.error(request, 'Invalid username or password.')
                logger.debug("Invalid username or password.")
        else:
            logger.debug("Login form is not valid")
    else:
        login_form = LoginForm()
        register_form = UserForm()

    return render(request, 'authenticate/login_register.html', {'login_form': login_form, 'register_form': register_form, 'logout_flag': logout_flag})
def register(request):
    logger.debug("Entering register view")

    if request.method == "POST":
        register_form = UserForm(request.POST)
        login_form = LoginForm()
        if register_form.is_valid():
            logger.debug("Register form is valid")
            username = register_form.cleaned_data['username']
            if User.objects.filter(username=username).exists():
                messages.error(request, 'A user with that username already exists.')
                logger.debug(f"A user with the username {username} already exists.")
            else:
                user = register_form.save(commit=False)
                user.is_active = False  # Mark the user as inactive until email confirmation
                user.save()

                # Create associated Profile
                profile = Profile.objects.create(user=user)
                logger.debug(f"Profile created for user {username}")

                # Send email confirmation
                current_site = get_current_site(request)
                email_subject = 'Confirm Your Registration'
                
                # Construct the confirmation link
                confirmation_link = request.build_absolute_uri(reverse('profiles:email_confirmation', kwargs={'uidb64': urlsafe_base64_encode(force_bytes(user.pk)), 'token': default_token_generator.make_token(user)}))
                
                email_message = render_to_string('email_confirmation/email_confirmation.html', {
                    'user': user,
                    'domain': current_site.domain,
                    'confirmation_link': confirmation_link,
                })
                logger.debug(f"Sending email to {user.email}")

                try:
                    send_mail(email_subject, email_message, EMAIL_FROM, [user.email])
                    logger.debug(f"Email sent to {user.email}")
                except BadHeaderError:
                    logger.error("Invalid header found when sending email.")
                    return HttpResponse('Invalid header found.')

                # Redirect the user to a different page
                return HttpResponseRedirect(reverse('profiles:email_registration'))
        else:
            logger.debug("Register form is not valid")
    else:
        register_form = UserForm()
        login_form = LoginForm()

    return render(request, 'authenticate/login_register.html', {'login_form': login_form, 'register_form': register_form})

def email_confirmation(request, uidb64, token):
    UserModel = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = UserModel._default_manager.get(pk=uid)
    except (TypeError, ValueError, OverflowError, UserModel.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)  # Automatically log in the user after email confirmation
        
        # Construct the confirmation link
        confirmation_link = request.build_absolute_uri(reverse('profiles:email_confirmation', kwargs={'uidb64': uidb64, 'token': token}))        
        # Pass user and confirmation_link to the context
        context = {
            'user': user,
            'confirmation_link': confirmation_link,
        }
        
        # Send the welcome email
        welcome_email_subject = 'Welcome to Revenue Hive!'
        welcome_email_message = render_to_string('email_confirmation/welcome_email.html', {'user': user})
        send_mail(welcome_email_subject, welcome_email_message, EMAIL_FROM, [user.email])

        return redirect('/profiles/login/?email_confirmed=true')
    else:
        return HttpResponseBadRequest('Invalid email confirmation link.')

def email_registration(request):
    return render(request, 'email_confirmation/email_registration.html')

class ShowProfilePageView(DetailView):
    model = Profile
    template_name = 'authenticate/user_profile.html'

    def get_context_data(self, *args, **kwargs):
        users = Profile.objects.all()
        context = super(ShowProfilePageView, self).get_context_data(*args, **kwargs)
        page_user = get_object_or_404(Profile, id=self.kwargs['pk'])
        context["page_user"] = page_user
        return context

def success(request):
    return render('authenticate/success.html')

def profile(request):
    return render(request, 'authenticate/profile.html')

@login_required
def questionnaire(request):
    if request.method == "POST":
        employment_status = request.POST['employment_status']
        if request.POST['job_title'] == 'Other':
            job_title = request.POST['other_job_title']
        else:
            job_title = request.POST['job_title']

        if request.POST['industry'] == 'Other':
            industry = request.POST['other_industry']
        else:
            industry = request.POST['industry']

        reason_for_joining = request.POST['reason_for_joining']

        # Create a plain text email message with questions and answers
        email_subject = f'Questionnaire Submission for {request.user.username}'
        email_message = (
            f'1. Are you currently: {employment_status}\n'
            f'2. Which job title most accurately identifies you?: {job_title}\n'
            f'3. What industry do you work in?: {industry}\n'
            f'4. What brought you to Revenue Hive: {reason_for_joining}'
        )

        # Send email with the questionnaire data
        send_mail(email_subject, email_message, EMAIL_FROM, ['matt@revenuehive.io'])

        # Mark the user as having completed the questionnaire
        user_profile, created = Profile.objects.get_or_create(user=request.user)
        user_profile.has_completed_questionnaire = True
        user_profile.save()

        return redirect('/posts/list/')

    return render(request, 'authenticate/questionnaire.html')

def logout_user(request):
    logout(request)
    return redirect('profiles:login')

@login_required  # Make sure the user is logged in to access this view
def edit_profile(request):
    user = request.user
    profile = user.profile  # Assuming there's a one-to-one relationship between User and Profile models

    if request.method == 'POST':
        form = ProfileEditForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('profiles:profile')  # Redirect to the profile page after successful edit
    else:
        form = ProfileEditForm(instance=profile)

    context = {'form': form}
    return render(request, 'authenticate/edit_profile.html', context)
