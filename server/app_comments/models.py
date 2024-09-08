from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from app_votes.models import Vote

from app_posts.models import Post

# Create your models here.
class Answer(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='answers')

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

    def save(self, *args, **kwargs):
        # Update 'updated_at' to the current time before saving
        self.updated_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.author} - {self.post} - {self.content} - {self.post.id}" 
    

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, null=True, blank=True)

   
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
        if self.answer:
            return f"{self.content} - {self.answer.post.id}"
        return f"{self.content} - No associated answer"


    # def __str__(self):
    #     return f"{self.content} - {self.post.id}"