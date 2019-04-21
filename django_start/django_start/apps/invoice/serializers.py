from rest_framework import serializers

from django_start.apps.product.models import Product

class ProductInvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['id']