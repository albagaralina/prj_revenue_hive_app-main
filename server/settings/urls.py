"""
URL configuration for prj_revenue_hive project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('landing_page.urls')),
    path('auth/', obtain_auth_token),
    path('profiles/', include('app_profiles.urls')),  # Include with namespace
    path('comments/', include('app_comments.urls')),
    path('posts/', include('app_posts.urls')),
    path('votes/', include('app_votes.urls')),
    path('communities/', include('app_communities.urls')),
    path('password_reset_confirm/<uidb64>/<token>/',
     auth_views.PasswordResetConfirmView.as_view(
         template_name='registration/password_reset_confirm.html'
     ),
     name='password_reset_confirm'),
    path('password_reset/done', auth_views.PasswordResetDoneView.as_view(template_name='registration/password_reset_done.html'),name='password_reset_done'),
    path('password-reset-complete/',
     auth_views.PasswordResetCompleteView.as_view(
         template_name='registration/password_reset_complete.html'
     ),
     name='password_reset_complete'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)