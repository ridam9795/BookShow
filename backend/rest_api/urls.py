
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('movies/', views.MovieApi.as_view(), name='movies'),
    path('events/', views.EventApi.as_view(), name='events'),
    path('sports/', views.SportApi.as_view(), name='sports'),
    path('activities/', views.ActivityApi.as_view(), name='activities'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
