from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import ShowProfilePageView
from django.contrib.auth import views as auth_views

app_name = 'profiles'

urlpatterns = [
    path('login/', views.login_user, name="login"),
    path('register/', views.register, name="register"),
    path('logout_user/', views.logout_user, name="logout"),
    path('email_confirmation/<str:uidb64>/<str:token>/', views.email_confirmation, name='email_confirmation'),
    path('edit_profile/', views.edit_profile, name='edit_profile'),
    path('profile/', views.profile, name="profile"),
    path('<int:pk>/profile/', ShowProfilePageView.as_view(), name="show_profile_page"),
    path('email_registration/', views.email_registration, name='email_registration'),
    path('questionnaire/', views.questionnaire, name='questionnaire'),

    # Password Reset URLs
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='registration/password_reset_form.html'),name='password_reset'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
