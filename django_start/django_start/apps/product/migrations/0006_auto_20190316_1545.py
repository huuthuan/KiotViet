# Generated by Django 2.1.7 on 2019-03-16 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_auto_20190315_2118'),
    ]

    operations = [
        migrations.RenameField(
            model_name='imageproduct',
            old_name='url',
            new_name='url_1',
        ),
        migrations.AddField(
            model_name='imageproduct',
            name='url_2',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='imageproduct',
            name='url_3',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='imageproduct',
            name='url_4',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='imageproduct',
            name='url_5',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
