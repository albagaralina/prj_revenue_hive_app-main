from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'hive']

class FeedbackForm(forms.Form):
    suggestion = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3, 'placeholder': 'What would you like to suggest?'}),
        required=False
    )
    bug = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3, 'placeholder': 'Please describe the bug.'}),
        required=False
    )
    compliment = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3, 'placeholder': 'Send us a compliment!'}),
        required=False
    )