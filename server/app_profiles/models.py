from django.db import models
from django.contrib.auth.models import User
from PIL import Image
import uuid


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profileID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_name = models.CharField(max_length=200, null=True)
    company_name = models.CharField(max_length=200, null=True)
    job_title = models.CharField(max_length=200, null=True)
    years_of_experience = models.PositiveIntegerField(default=0)
    bio = models.CharField(max_length=1000)
    phone = models.IntegerField(null=True, blank=True)
    image = models.ImageField(default='default.jpg', upload_to="imgs/profile_pic")
    email = models.EmailField(null=True)  
    has_completed_questionnaire = models.BooleanField(default=False)


    def __str__(self):
        return f'{self.user.username} - Profile'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)


# purpose to store additional, often optional info about the user that is not directly related to authentication .... bio, description, profile_pic, dob, location, website, phone number, employer, years of experience
# profile has a one to one relationship with the user
