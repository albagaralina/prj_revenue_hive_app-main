from django import forms

class VoteForm(forms.Form):
    VOTE_CHOICES = [
        ('upvote', 'Upvote'),
        ('downvote', 'Downvote'),
    ]

    vote_type = forms.ChoiceField(choices=VOTE_CHOICES, widget=forms.HiddenInput)
    content_type = forms.CharField(widget=forms.HiddenInput)
    object_id = forms.IntegerField(widget=forms.HiddenInput)
