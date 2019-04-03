from rest_framework import serializers
from django.db import transaction
from django_start.apps.product.models import Category, Product, ImageProduct


class CategoryLookupSerializer(serializers.ModelSerializer):
    parentId = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'parentId')
        read_only_fields = ['id']

    def get_parentId(self, category):
        if category.parent:
            return category.parent.id
        return None


class CategorySerializer(serializers.ModelSerializer):
    parentId = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'parentId')
        read_only_fields = ['id']

    def get_parentId(self, category):
        if category.parent:
            return category.parent.id
        return None

    def validate(self, attrs):
        category_name = attrs.get('name', None)
        category_id = self.initial_data.get('id', None)
        category = Category.objects.exclude(id=category_id).filter(name__iexact=category_name)
        if category.exists():
            raise serializers.ValidationError({"errors": "Category name has been used."})

        return attrs


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ['id']

    def get_category(self, product):
        category = product.category
        serializer = CategorySerializer(instance=category, context=self.context)
        return serializer.data

    def validate(self, attrs):
        product_name = attrs.get('name', None)
        product_id = self.initial_data.get('id', None)
        product = Product.objects.filter(name__iexact=product_name) \
            .exclude(id=product_id)
        if product.exists():
            raise serializers.ValidationError({"errors": "Product name has been used."})

        return attrs


    def create(self, validated_data):
        data = self.initial_data
        category = Category.objects.get(id = data.get('category'))
        with transaction.atomic():
            try:
                urls = data.get('urls', [])
                # Create product
                product = Product.objects.create(name=data.get('name'),
                                                 category=category,
                                                 price_cost=data.get('price_cost'),
                                                 price_sale=data.get('price_sale'),
                                                 on_hand=data.get('on_hand'),
                                                 min_quantity=data.get('min_quantity'),
                                                 max_quantity=data.get('max_quantity'),
                                                 describe=data.get('describe'),
                                                 allows_sale=data.get('allows_sale')
                                                 )
                # Create image product
                for url in urls:
                    image_product = ImageProduct.objects.create(
                        product = product,
                        url = url
                    )
            except Exception as e:
                raise e
