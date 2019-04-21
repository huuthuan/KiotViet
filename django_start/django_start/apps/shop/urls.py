from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^', views.ShopView.as_view(), name= 'shop')
   ]
