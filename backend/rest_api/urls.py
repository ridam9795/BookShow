
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('movies/', views.MovieApi.as_view(), name='movies'),
    path('filterMovies/', views.FilterMovieApi.as_view(), name='filterMovies'),
    path('events/', views.EventApi.as_view(), name='events'),
    path('filterEvents/', views.FilterEventApi.as_view(), name='filterEvents'),
    path('sports/', views.SportApi.as_view(), name='sports'),
    path('filterSports/', views.FilterSportApi.as_view(), name='filterSports'),
    path('activities/', views.ActivityApi.as_view(), name='activities'),
    path('filterActivities/', views.FilterActivityApi.as_view(), name='filterActivities'),
    path('search/', views.SearchApi.as_view(), name='search'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
