from django.db import models
from django.contrib.auth.models import User

from django_start.apps.customer.models import Customer
from django_start.apps.product.models import Product

# Create your models here.
class Invoice(models.Model):
    invoice_code = models.CharField(max_length=10)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)
    created_date = models.DateField()
    total_quantity = models.IntegerField()
    total = models.IntegerField()
    discount = models.IntegerField()
    note = models.CharField(null=True, max_length=255)

class InvoiceDetails(models.Model):
    created_date = models.DateField()
    invoice =  models.ForeignKey(Invoice, on_delete=models.CASCADE, null=True, blank=True)
    product =  models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    quantity = models.IntegerField()
    tax = models.IntegerField()
    price = models.IntegerField()
    discount = models.IntegerField()
    sub_total = models.IntegerField()
    paid_amount = models.IntegerField()
    note = models.CharField(null=True, max_length=255)