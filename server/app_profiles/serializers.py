from rest_framework import serializers
from .models import User, Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'profileID', 'user_name', 'company_name', 'job_title', 'years_of_experience', 'bio', 'phone', 'image', 'email', 'has_completed_questionnaire']

# To convert the Profile model class into a serializer in Django, you can use Django REST Framework (DRF). DRF provides powerful tools for serializing and deserializing complex data types, such as Django models, into native Python data types that can be easily rendered into JSON.

