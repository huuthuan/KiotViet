# Generated by Django 2.1.7 on 2019-03-15 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_remove_category_parent'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=True, related_name='children', to='product.Category'),
        ),
    ]
