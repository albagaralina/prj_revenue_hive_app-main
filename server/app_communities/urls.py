# urls.py in app_communities
from django.urls import path
from .views import HivePostsView  # Import the class-based view

app_name = 'communities'
urlpatterns = [
    # other URL patterns
    path('hive/<int:hive_id>/', HivePostsView.as_view(), name='hive_posts'),
    # other URL patterns
]
