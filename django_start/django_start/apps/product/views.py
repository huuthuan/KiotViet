from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, viewsets

from django_start.apps.product.serializers import CategorySerializer, CategoryLookupSerializer, ProductSerializer
from django_start.apps.product.models import Category, Product
from django_start.utils.shortcuts import get_or_none

# Create your views here.

class LookupCategoriesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        categories = []
        categories = Category.objects.all()
        categories = CategoryLookupSerializer(categories, many=True)
        return Response(categories.data, status=status.HTTP_200_OK)


class CategoriesViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CategorySerializer

    def get_queryset(self):
        data = Category.objects.all()
        return data

    def create(self, request, *args, **kwargs):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            try:
                parent_id = request.data.get('parentId', None)
                parent = get_or_none(Category, id=parent_id)
                serializer.validated_data['parent'] = parent
                serializer.create(serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = CategorySerializer(instance=instance, data=request.data)

        if serializer.is_valid():
            try:
                parent_id = request.data.get('parentId', None)
                parent = get_or_none(Category, id=parent_id)
                serializer.validated_data['parent'] = parent
                serializer.update(instance, serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        try:
            category = self.get_object()
            Category.objects.remove_category(category)
            return Response(True, status=status.HTTP_200_OK)
        except Exception as e:
            raise APIException(e)

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer
    pagination_class = None

    def get_queryset(self):
        return Product.objects.all();

    def create(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.create(serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ProductSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            try:
                serializer.update(instance, serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, *args, **kwargs):
        try:
            product = self.get_object()
            Product.objects.get(id=product.id).delete()
            return Response(True, status=status.HTTP_200_OK)
        except Exception as e:
            raise APIException(e)
