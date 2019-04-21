from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated

from django_start.apps.product.models import Product
from django_start.apps.invoice.serializers import ProductInvoiceSerializer

# Create your views here.

class ProductInvoiceViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        product = Product.objects.all()
        serializer = ProductInvoiceSerializer(product, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)