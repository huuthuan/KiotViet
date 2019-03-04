from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers

app_name = 'api'

router = routers.DefaultRouter()

urlpatterns = [
    url(r'', include(router.urls)),
    path('auth/', include('django_start.apps.account.urls'))
]
