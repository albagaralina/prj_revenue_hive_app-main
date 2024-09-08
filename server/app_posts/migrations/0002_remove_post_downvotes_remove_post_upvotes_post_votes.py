# Generated by Django 4.2 on 2023-12-20 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_votes', '0003_alter_vote_content_type'),
        ('app_posts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='downvotes',
        ),
        migrations.RemoveField(
            model_name='post',
            name='upvotes',
        ),
        migrations.AddField(
            model_name='post',
            name='votes',
            field=models.ManyToManyField(related_name='post_votes', to='app_votes.vote'),
        ),
    ]
