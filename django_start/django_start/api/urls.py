from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers

from django_start.apps.product import views as product_views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'products', product_views.ProductViewSet, base_name='products')

urlpatterns = [
    url(r'', include(router.urls)),
    path('auth/', include('django_start.apps.account.urls')),
    path('product/', include('django_start.apps.product.urls'))
]
