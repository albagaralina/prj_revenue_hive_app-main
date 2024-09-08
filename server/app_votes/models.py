from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

class Vote(models.Model):
    UPVOTE = 1
    DOWNVOTE = -1
    VOTE_CHOICES = (
        (UPVOTE, 'Upvote'),
        (DOWNVOTE, 'Downvote'),
    )

    voter = models.ForeignKey(User, on_delete=models.CASCADE)
    vote_type = models.IntegerField(choices=VOTE_CHOICES)

    content_type = models.ForeignKey(
        ContentType,
        on_delete=models.CASCADE,
        limit_choices_to=models.Q(
            models.Q(model='answer') | models.Q(model='comment') | models.Q(model='post')
        )
    )
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return f"{self.voter.username}: {self.get_vote_type_display()}"

    def toggle_vote(self, user, new_vote_type):
        # Check if the user has already voted on this content
        existing_vote = Vote.objects.filter(
            content_type=self.content_type,
            object_id=self.object_id,
            voter=user
        ).first()

        if existing_vote:
            if existing_vote.vote_type == new_vote_type:
                # If the user's previous vote type is the same as the current one, remove the vote
                existing_vote.delete()
            else:
                # If the user's previous vote type is different, update the vote
                existing_vote.vote_type = new_vote_type
                existing_vote.save()
        else:
            # If the user hasn't voted on this content before, create a new vote
            new_vote = Vote(
                voter=user,
                vote_type=new_vote_type,
                content_type=self.content_type,
                object_id=self.object_id
            )
            new_vote.save()

    def save(self, *args, **kwargs):
        content = self.content_object
        if content:
            upvotes = Vote.objects.filter(
                content_type=self.content_type,
                object_id=self.object_id,
                vote_type=self.UPVOTE
            ).count()

            downvotes = Vote.objects.filter(
                content_type=self.content_type,
                object_id=self.object_id,
                vote_type=self.DOWNVOTE
            ).count()

            content.upvotes = upvotes
            content.downvotes = downvotes
            content.save()

        super().save(*args, **kwargs)
