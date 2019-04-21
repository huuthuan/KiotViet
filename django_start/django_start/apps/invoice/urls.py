from django.conf.urls import url, include

from rest_framework import routers

from django_start.apps.customer import views as customer_view
from . import views

router = routers.DefaultRouter()
router.register(r'customers', customer_view.CustomerViewSet, base_name='customers')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^product-list/$', views.ProductInvoiceViewSet.as_view()),
]
