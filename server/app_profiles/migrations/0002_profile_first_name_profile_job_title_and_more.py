# Generated by Django 4.2 on 2023-08-14 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='first_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='job_title',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='last_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='user_name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='years_of_experience',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
