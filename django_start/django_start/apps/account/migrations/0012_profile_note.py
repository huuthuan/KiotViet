# Generated by Django 2.1.7 on 2019-05-22 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0011_profile_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='note',
            field=models.TextField(max_length=500, null=True),
        ),
    ]
