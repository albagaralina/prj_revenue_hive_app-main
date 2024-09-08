# app_communities/models.py
from django.db import models
from django.contrib.auth.models import User

class Hive(models.Model):
    title = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_hive')
    subscribers = models.ManyToManyField(User, related_name='subscribed_hive', blank=True)
    
    # New fields for rules, banner, and logo
    rules = models.TextField(blank=True)
    banner_image = models.ImageField(upload_to='hive_banners/', blank=True)
    logo_image = models.ImageField(upload_to='hive_logos/', blank=True)
    
    # New field for sidebar content
    sidebar_content = models.TextField(blank=True)

    def __str__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        app_label = 'app_communities'  # Explicitly specify the app_label


    
