# Generated by Django 2.1.7 on 2019-04-17 15:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0010_auto_20190415_1405'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='created_date',
            new_name='date_created',
        ),
    ]
