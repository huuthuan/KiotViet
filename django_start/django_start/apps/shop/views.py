from rest_framework import status
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django_start.apps.shop.serializers import ShopSerializer


class ShopView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ShopSerializer(data=request.data)
        if serializer.is_valid():
            try:
                token = serializer.update(request.user.profile.shop, serializer.validated_data)
                return Response(status=status.HTTP_201_CREATED)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = request.user
        data = {
            'name': user.profile.shop.name,
            'email': user.profile.shop.email,
            'phone': user.profile.shop.phone,
            'website': user.profile.shop.website,
            'address': user.profile.shop.address,
            'description': user.profile.shop.description,
        }
        return Response(data, status=status.HTTP_200_OK)