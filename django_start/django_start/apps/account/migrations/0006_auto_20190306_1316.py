# Generated by Django 2.1.7 on 2019-03-06 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20190302_1651'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='date_birth',
            field=models.DateField(max_length=8),
        ),
    ]
