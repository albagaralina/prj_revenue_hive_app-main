# Generated by Django 4.2 on 2023-09-18 22:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('app_votes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='content_type',
            field=models.ForeignKey(limit_choices_to=models.Q(models.Q(('model', 'answer'), ('model', 'comment'), ('model', 'question'), _connector='OR')), on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype'),
        ),
    ]
