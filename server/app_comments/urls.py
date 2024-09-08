from django.urls import path
from . import views

app_name = 'comments'

urlpatterns = [
    path('create/answer/<int:post_id>/', views.answer_create, name='answer_create'),
    path('answer/<int:pk>/update/', views.AnswerUpdate.as_view(), name='answer_update'),
    path('answer/<int:pk>/delete/', views.AnswerDelete.as_view(), name='answer_delete'),
    path('load-more-answers/<int:post_id>/<int:offset>/', views.load_more_answers, name='load_more_answers'),
    path('create/<int:answer_id>/<int:post_id>/', views.comment_create, name='comment_create'),
    path('<int:pk>/update/', views.CommentUpdate.as_view(), name='comment_update'),
    path('<int:pk>/delete/', views.CommentDelete.as_view(), name='comment_delete'),
    path('get_data/<int:post_id>/', views.get_data, name='get_data'),
]


# http://localhost:8000/comments/2/update/

# http://localhost:8000/posts/1/
# http://localhost:8000/comments/create/answer/1/


