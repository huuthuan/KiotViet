from rest_framework import serializers
from django.db import transaction

from django.contrib.auth.models import User
from django_start.apps.customer.models import Customer

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = '__all__'
        read_only_fields = ['id']

    def create(self, validated_data):
        data = self.initial_data
        user = User.objects.get(id=data.get('created_by'))

        with transaction.atomic():
            try:
                # Create customer
                Customer.objects.create(name=data.get('name'),
                                        birthday=data.get('birthday'),
                                        gender=data.get('gender'),
                                        email=data.get('email'),
                                        phone=data.get('phone'),
                                        tax_code=data.get('tax_code'),
                                        address=data.get('address'),
                                        created_by=user,
                                        date_created=data.get('date_created'),
                                        note=data.get('note'))
            except Exception as e:
                raise e

    def update(self, instance, validated_data):
        data = self.initial_data
        user = User.objects.get(id=data.get('created_by'))
        with transaction.atomic():
            try:
                # Update customer
                instance.name = validated_data.get('name')
                instance.birthday = validated_data.get('birthday')
                instance.gender = validated_data.get('gender')
                instance.email = validated_data.get('email')
                instance.phone = validated_data.get('phone')
                instance.tax_code = validated_data.get('tax_code')
                instance.address = validated_data.get('address')
                instance.created_by = user
                instance.date_created = validated_data.get('date_created')
                instance.note = validated_data.get('note')
                instance.save()
            except Exception as e:
                raise e

        return CustomerSerializer(instance=instance).data