from django.urls import path
from . import views
from app_votes.views import vote

app_name = 'votes'

urlpatterns = [
    path('vote/', views.vote, name='vote'),  # Add this line for the vote view


]
