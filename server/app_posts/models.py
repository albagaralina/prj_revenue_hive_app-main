from django.db import models
from django.contrib.auth.models import User
from app_communities.models import Hive
from django.contrib.contenttypes.models import ContentType
from app_votes.models import Vote

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # tags = models.ManyToManyField(Tag, related_name='posts')
    hive = models.ForeignKey(Hive, on_delete=models.CASCADE, related_name='posts')

    def upvote_count(self):
        return Vote.objects.filter(
        content_type=ContentType.objects.get_for_model(self),
        object_id=self.id,
        vote_type=Vote.UPVOTE
    ).count()

    def downvote_count(self):
        return Vote.objects.filter(
            content_type=ContentType.objects.get_for_model(self),
            object_id=self.id,
            vote_type=Vote.DOWNVOTE
        ).count()

    def __str__(self):
        return self.title
    
    def get_first_20_words(self):
        words = self.content.split()[:20]
        return ' '.join(words)