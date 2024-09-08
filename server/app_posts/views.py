from django.shortcuts import render, get_object_or_404, redirect
from django.template.loader import render_to_string
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse, reverse_lazy
from django.http import JsonResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from app_posts.forms import PostForm, FeedbackForm
from app_comments.models import Answer, Comment
from app_votes.models import Vote
from app_comments.views import answer_create, comment_create
from app_comments.forms import CommentForm, AnswerForm
from app_communities.models import Hive
from .models import Post
from app_comments.models import Comment
from django.http import JsonResponse
from django.core.mail import send_mail
from prj_revenue_hive.settings import EMAIL_HOST_USER, EMAIL_FROM
from prj_revenue_hive.decorators import questionnaire_completed_required

# Home
def home(request):
    return render(request, 'home.html')

def base(request):
    return render(request, 'base.html')

# The modification enables form availability in post_list.html for post creation on GET requests. Form submission retains the existing logic for post creation through the form_valid method.

@login_required
@questionnaire_completed_required
def post_list(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.instance.author = request.user
            form.save()
            return redirect('posts:post_list')

    posts = Post.objects.all()
    comments = Comment.objects.all()
    form = PostForm()
 
    # Fetch posts belonging to the hive with the title "job"
    job_hive = get_object_or_404(Hive, title='Jobs')  # Assuming 'job' is the correct title
    job_posts = Post.objects.filter(hive=job_hive)

    # Pass answer_form and comment_form to front end so we can access it
    answer_form = AnswerForm()
    comment_form = CommentForm()
    feedback_form = FeedbackForm()

    return render(request, 'post_list.html', {'posts': posts, 'comments': comments, 'form': form, 'job_hive': job_hive, 'job_posts': job_posts, 'answer_form': answer_form, 'comment_form': comment_form, 'feedback_form': feedback_form})


class PostCreate(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'post_list.html'  # Reuse the same template for listing and creating posts
    
    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.author = self.request.user
        self.object.save()
        if all([form.cleaned_data.get('title'), form.cleaned_data.get('content'), form.cleaned_data.get('hive')]):
            # Redirect to post_list page if all fields are filled out
            return JsonResponse({'success': True, 'redirect_url': reverse('posts:post_list')})
        else:
            # Return JsonResponse with an issue message
            return self.form_invalid(form)

    def form_invalid(self, form):
        # Return JsonResponse with an issue message
        return JsonResponse({'message': 'Error: Please make sure all fields are filled out.'})

@login_required
def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    answers = Answer.objects.filter(post=post).order_by('created_at')
    answer_form = AnswerForm()
    comment_form = CommentForm()
    
    if request.method == 'POST':
        form_type = request.POST.get('form_type')

        if form_type == 'answer':
            return answer_create(request, post.id)

        elif form_type == 'comment':
            answer_id = request.POST.get('answer_id')
            if answer_id:
                answer = get_object_or_404(Answer, id=answer_id)
                form = CommentForm(request.POST)
                if form.is_valid():
                    comment = form.save(commit=False)
                    comment.author = request.user
                    comment.comment_type = 'reply'
                    comment.content_type = ContentType.objects.get_for_model(Answer)
                    comment.object_id = answer.id
                    comment.answer = answer
                    comment.save()

                    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
                        form_html = render_to_string('comment_form.html', {'post': answer.post, 'form': CommentForm()})
                        return JsonResponse({'form_html': form_html})
                    else:
                        return redirect('posts:post_detail', post_id=answer.post.id)

   


    return render(request, 'post_detail.html', {
        'post': post,
        'answers': answers,
        'AnswerForm': answer_form,
        'CommentForm': comment_form,
    })




class PostUpdate(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    form_class = PostForm
    template_name = 'post_update.html'
    success_url = reverse_lazy('posts:post_list')

    def test_func(self):
        return self.get_object().author == self.request.user

    def handle_no_permission(self):
        print("User does not have permission to update this post")
        return super().handle_no_permission()


        

class PostDelete(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = 'post_list.html'
    success_url = reverse_lazy('posts:post_list')

    def test_func(self):
        post = self.get_object()
        return post.author == self.request.user

    def handle_no_permission(self):
        print("User does not have permission to delete this post")
        return super().handle_no_permission()

    def delete(self, request, *args, **kwargs):
        print("Deleting post")
        return super().delete(request, *args, **kwargs)

# Handle feedback
def handle_feedback(request):
    template_name = 'post_list.html'
    success_url = reverse_lazy('posts:post_list')

    if request.method == 'POST':
        feedback_form = FeedbackForm(request.POST)
        if feedback_form.is_valid():
            # Process the feedback data
            suggestion = feedback_form.cleaned_data['suggestion']
            bug = feedback_form.cleaned_data['bug']
            compliment = feedback_form.cleaned_data['compliment']

            # Determine the feedback type
            feedback_type = ""
            if suggestion:
                feedback_type = "Suggestion"
            elif bug:
                feedback_type = "Bug"
            elif compliment:
                feedback_type = "Compliment"

            # Build email subject and body
            subject = f"New Revenue Hive Feedback from {request.user.username}"
            body = f"Feedback type: {feedback_type}\nContent: {suggestion or bug or compliment}"

            # Send email
            send_mail(subject, body, EMAIL_FROM, ['matt@revenuehive.io', 'alba@revenuehive.io', 'aleisha@revenuehive.io'], fail_silently=True)
            print('email sent')

            # Redirect after successful form submission
            return redirect('posts:post_list')

    # Handle other cases or render the form
    return render(request, template_name, {'feedback_form': feedback_form})

# TODO: search functionality,form populate using JS, voting show up on the front end, show actual comment number on post page
    
