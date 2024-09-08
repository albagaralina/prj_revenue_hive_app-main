from django.urls import path, include
from . import views

app_name = 'posts'

urlpatterns = [
    path('base/', views.base, name='base'),
    path('list/', views.post_list, name='post_list'),
    path('<int:post_id>/', views.post_detail, name='post_detail'),
    path("create/", views.PostCreate.as_view(), name="post_create"),
    path('<int:pk>/update/', views.PostUpdate.as_view(), name='post_update'),
    path('<int:pk>/delete/', views.PostDelete.as_view(), name='post_delete'),
    path('votes/', include('app_votes.urls')),
    path('feedback/', views.handle_feedback, name='handle_feedback'), 
]
