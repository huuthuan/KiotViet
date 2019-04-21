from rest_framework import serializers

class ShopSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    phone = serializers.CharField(allow_null=True, allow_blank=True, max_length=20)
    address = serializers.CharField(allow_null=True, allow_blank=True, max_length=255)
    website = serializers.CharField(allow_null=True, allow_blank=True, max_length=50)
    description = serializers.CharField(allow_null=True, allow_blank=True, max_length=255)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.address = validated_data.get('address', instance.address)
        instance.website = validated_data.get('website', instance.website)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
