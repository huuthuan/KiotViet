from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django_start.apps.shop.models import Shop

class Role(models.Model):
    name = models.CharField(max_length=255)

class Profile(models.Model):
    name = models.CharField(max_length=255)
    CATEGORY_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=CATEGORY_CHOICES, null=True)
    phone = models.CharField(max_length=11)
    date_birth = models.DateField(null=True)
    address = models.CharField(max_length=255)
    note = models.TextField(max_length=500, null=True)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)