# Generated by Django 4.2 on 2023-09-18 17:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_profiles', '0008_profile_downvotes_profile_upvotes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='downvotes',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='upvotes',
        ),
    ]
