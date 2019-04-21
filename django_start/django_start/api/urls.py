from django.conf.urls import url, include
from django.urls import path

app_name = 'api'

urlpatterns = [
    path('auth/', include('django_start.apps.account.urls')),
    path('shop/', include('django_start.apps.shop.urls')),
    path('product/', include('django_start.apps.product.urls')),
    path('customers/', include('django_start.apps.customer.urls')),
    path('sell-goods/', include('django_start.apps.invoice.urls'))
]
