from django.db import models
from django.contrib.auth.models import User

def increment_customer_code_number():
    last_customer = Customer.objects.all().order_by('id').last()
    if not last_customer:
        return 'KH0001'
    customer_code = last_customer.customer_code
    customer_int = int(customer_code.split('KH')[-1])
    width = 4
    new_customer_int = customer_int + 1
    formatted = (width - len(str(new_customer_int))) * "0" + str(new_customer_int)
    new_customer_no = 'KH' + str(formatted)
    return new_customer_no

class Customer(models.Model):
    customer_code = models.CharField(max_length = 20, default = increment_customer_code_number, null = True, blank = True)
    name = models.CharField(max_length=255)
    birthday = models.DateField(null=True)
    CATEGORY_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=CATEGORY_CHOICES, null=True)
    email = models.EmailField(max_length=75, null=True)
    phone = models.CharField(max_length=20, null=True)
    tax_code = models.CharField(max_length=11, null=True)
    address =  models.CharField(max_length=255, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_created = models.DateField(null=True)
    modified_date = models.DateField(null=True)
    note = models.CharField(null=True, max_length=255)
