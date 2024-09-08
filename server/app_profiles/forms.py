from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile

class UserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class LoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)

class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['user_name', 'company_name', 'job_title', 'years_of_experience', 'bio', 'phone', 'image', 'email']
