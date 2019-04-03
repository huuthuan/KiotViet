from django.conf.urls import url, include

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'categories', views.CategoriesViewSet, base_name='categories')
router.register(r'product-detail', views.ProductViewSet, base_name='product-detail')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^lookup/categories/$', views.LookupCategoriesView.as_view()),]
