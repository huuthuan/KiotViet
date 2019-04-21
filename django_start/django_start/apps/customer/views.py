from rest_framework.response import Response
from rest_framework.exceptions import APIException
from rest_framework import status, viewsets

from rest_framework.permissions import IsAuthenticated


from django_start.apps.customer.models import Customer
from django_start.apps.customer.serializers import CustomerSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CustomerSerializer
    pagination_class = None

    def get_queryset(self):
        return Customer.objects.all();

    def create(self, request, *args, **kwargs):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.create(serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = CustomerSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            try:
                serializer.update(instance, serializer.validated_data)
                return Response(True, status=status.HTTP_200_OK)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, *args, **kwargs):
        try:
            customer = self.get_object()
            Customer.objects.get(id=customer.id).delete()
            return Response(True, status=status.HTTP_200_OK)
        except Exception as e:
            raise APIException(e)