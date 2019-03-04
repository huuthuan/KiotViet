from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path

from .views import index, error_404, error_500

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('django_start.api.urls', 'api')),
    # Pass everything else through to Angular
    url('^.*$', index, name='index')
]

handler404 = error_404
handler500 = error_500
