from rest_framework import permissions, status
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django_start.apps.account.serializers import RegisterSerializer, UserProfileSerializer


class Register(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            try:
                token = serializer.create(serializer.validated_data)
                return Response({'token': token}, status=status.HTTP_201_CREATED)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            try:
                token = serializer.update(request.user.profile, serializer.validated_data)
                return Response({'token': token}, status=status.HTTP_201_CREATED)
            except Exception as e:
                raise APIException(e)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)