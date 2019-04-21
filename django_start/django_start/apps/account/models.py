from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django_start.apps.shop.models import Shop

class Role(models.Model):
    name = models.CharField(max_length=255)

class Employee(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(null=True, max_length=11)
    date_birth = models.DateField(null=True)
    address = models.CharField(null=True, max_length=255)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    manage = models.ForeignKey(User, on_delete=models.CASCADE)

class AccountEmployee(models.Model):
    account = models.OneToOneField(User, on_delete=models.CASCADE)
    employee = models.OneToOneField(Employee, on_delete=models.CASCADE)

class Profile(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=11)
    date_birth = models.DateField(null=True)
    address = models.CharField(max_length=255)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)