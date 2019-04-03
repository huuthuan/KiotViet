from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from . import views

urlpatterns = [
    url(r'^profile/?', views.UserProfileView.as_view(), name= 'profile'),
    url(r'^password/change/$', views.PasswordChangeView.as_view(), name='rest_password_change'),
    url(r'^register/?', views.Register.as_view(), name='register'),
    url(r'^login/?', obtain_jwt_token, name='login'),
    url(r'^jwt/refresh/?', refresh_jwt_token, name='jwt-refresh'),
    url(r'^jwt/verify/?', verify_jwt_token, name='jwt-verify'),
]
