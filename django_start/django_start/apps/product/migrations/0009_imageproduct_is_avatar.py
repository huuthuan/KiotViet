# Generated by Django 2.1.7 on 2019-03-24 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0008_auto_20190323_2034'),
    ]

    operations = [
        migrations.AddField(
            model_name='imageproduct',
            name='is_avatar',
            field=models.BooleanField(default=True),
        ),
    ]
