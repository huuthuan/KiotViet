# Generated by Django 2.1.7 on 2019-04-11 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0002_customer_gender'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='area',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='wards',
        ),
        migrations.AlterField(
            model_name='customer',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default=1, max_length=200),
            preserve_default=False,
        ),
    ]
