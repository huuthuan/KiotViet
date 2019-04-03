from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django_start.apps.shop.models import Shop

class Profile(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    date_birth = models.DateField(null=True)
    address = models.CharField(max_length=255)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)