from django.contrib.auth.models import User
from rest_framework import serializers

from django_start.apps.account.models import Profile
from django_start.apps.shop.models import Shop


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    phone = serializers.CharField(max_length=20)
    shop_name = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=50)
    confirm_password = serializers.CharField(max_length=50)

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError('Passwords do not match.')
        if User.objects.filter(email=data.get('email')).exists():
            raise serializers.ValidationError('Email already exist.')
        if User.objects.filter(username=data.get('username')).exists():
            raise serializers.ValidationError('User name already exist.')
        if Profile.objects.filter(phone=data.get('phone')).exists():
            raise serializers.ValidationError('Phone already exist.')
        return data

    def create(self, validated_data):
        user = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        shop = Shop.objects.create(
            name=validated_data['shop_name'],
            phone=validated_data['phone'],
            email=validated_data['email'],
            address=validated_data['address']
        )
        profile = Profile.objects.create(
            name=validated_data['first_name'] + validated_data['last_name'],
            phone=validated_data['phone'],
            shop=shop,
            user=user
        )


class UserProfileSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    phone = serializers.CharField(max_length=50, allow_null=True, allow_blank=True)
    address = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    dare_birth = serializers.DateField(format('%Y/%m/%d'))

    def update(self, instance, validated_data):
        instance.user.first_name = validated_data.get('first_name', instance.user.first_name)
        instance.user.last_name = validated_data.get('last_name', instance.user.last_name)
        instance.user.email = validated_data.get('email', instance.user.email)
        instance.user.save()
        instance.address = validated_data.get('address', instance.address)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.dare_birth = validated_data.get('dare_birth', instance.dare_birth)
        instance.save()