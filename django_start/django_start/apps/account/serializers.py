from django.conf import settings
from django.contrib.auth.models import User
from django.db import transaction

from rest_framework_jwt.settings import api_settings
from rest_framework import serializers

from django_start.utils import mailer
from .models import Shop, Employee, Role, AccountEmployee, Profile


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    phone = serializers.CharField(max_length=20)
    shop_name = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(write_only=True, max_length=50)
    confirm_password = serializers.CharField(write_only=True, max_length=50)

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError('Passwords do not match.')
        if User.objects.filter(email=data.get('email')).exists():
            raise serializers.ValidationError({"email": "Email already exist."})
        if User.objects.filter(username=data.get('username')).exists():
            raise serializers.ValidationError('User name already exist.')
        if Profile.objects.filter(phone=data.get('phone')).exists():
            raise serializers.ValidationError('Phone already exist.')
        return data

    def create(self, validated_data):
        with transaction.atomic():
            try:
                # Create account
                user = User.objects.create_user(username=validated_data['username'],
                                                password=validated_data['password'],
                                                email=validated_data['email'],
                                                first_name=validated_data['first_name'],
                                                last_name=validated_data['last_name']
                                                )
                # Create shop
                shop = Shop.objects.create(
                    name=validated_data['shop_name'],
                    phone=validated_data['phone'],
                    email=validated_data['email'],
                    address=validated_data['address']
                )
                # Create profile
                Profile.objects.create(
                    name=validated_data['first_name'] + validated_data['last_name'],
                    phone=validated_data['phone'],
                    shop=shop,
                    user=user
                )
            except Exception as e:
                raise e

    def send_email_register(self, validated_data):
        try:
            email = validated_data['email']
            context = {
                'name': validated_data['first_name'] + validated_data['last_name'],
                'phone': validated_data['phone'],
                'shop_name': validated_data['shop_name'],
                'address': validated_data['address'],
                'email': validated_data['email'],
                'user_name': validated_data['username'],
                'password': validated_data['password']
            }
            mailer.send_mail(
                subject_template_name='emails/dns_tool/dns_tool_subject.txt',
                email_template_name='emails/dns_tool/dns_tool_email.html',
                context=context,
                to_emails=[email],
                from_email=settings.EMAIL_HOST_USER
            )
        except Exception as e:
            print(e)
            pass


class UserProfileSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    phone = serializers.CharField(max_length=50, allow_null=True, allow_blank=True)
    address = serializers.CharField(max_length=255)
    email = serializers.EmailField()

    def validate(self, data):
        exclude_id = None
        if self.instance:
            exclude_id = self.instance.id
        if User.objects.filter(email=data.get('email')).exclude(id=exclude_id).exists():
            raise serializers.ValidationError({"email": "Email already exist."})
        if User.objects.filter(username=data.get('username')).exclude(id=exclude_id).exists():
            raise serializers.ValidationError('User name already exist.')
        if Profile.objects.filter(phone=data.get('phone')).exclude(id=exclude_id).exists():
            raise serializers.ValidationError('Phone already exist.')
        return data

    def update(self, instance, validated_data):
        instance.user.first_name = validated_data.get('first_name', instance.user.first_name)
        instance.user.last_name = validated_data.get('last_name', instance.user.last_name)
        instance.user.email = validated_data.get('email', instance.user.email)
        instance.user.save()
        instance.address = validated_data.get('address', instance.address)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(instance.user)
        token = jwt_encode_handler(payload)

        return token


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountEmployee
        fields = '__all__'
        read_only_fields = ['id']

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError('Passwords do not match.')
        if User.objects.filter(email=data.get('email')).exists():
            raise serializers.ValidationError({"email": "Email already exist."})
        if User.objects.filter(username=data.get('username')).exists():
            raise serializers.ValidationError('User name already exist.')
        if Profile.objects.filter(phone=data.get('phone')).exists():
            raise serializers.ValidationError('Phone already exist.')
        return data

    def create(self, validated_data):
        data = self.initial_data
        manage = User.objects.get(id=data.get('manage'))
        role = Role.objects.get(id=data.get('role'))

        with transaction.atomic():
            try:
                # Create user
                user = User.objects.create_user(
                    username=validated_data['username'],
                    password=validated_data['password'],
                    email=validated_data['email'],
                    is_active = validated_data['status']
                )
                # Create employee
                employee = Employee.objects.create(
                    name=validated_data['shop_name'],
                    phone=validated_data['phone'],
                    date_birth=validated_data['date_birth'],
                    address=validated_data['address'],
                    role=role,
                    manage=manage
                )
                # Create Account
                AccountEmployee.objects.create(
                    account=user,
                    employee=employee,
                )
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
