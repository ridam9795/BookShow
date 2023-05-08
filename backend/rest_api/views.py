from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movie, Event,Sport,Activity
from .serializers import MovieSerializer, EventSerializer,SportSerializer,ActivitySerializer
from rest_framework import generics


class MovieApi(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class EventApi(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class SportApi(generics.ListAPIView):
    queryset = Sport.objects.all()
    serializer_class = EventSerializer


class ActivityApi(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = EventSerializer

class SearchApi(APIView):
    def get(self,request):
        name=request.GET.get('name')
        movies=Movie.objects.filter(title__icontains=name)
        movieSerializer=MovieSerializer(movies,many=True)
        events=Event.objects.filter(title__icontains=name)
        eventSerializer=EventSerializer(events,many=True)
        sports=Sport.objects.filter(title__icontains=name)
        sportSerializer=SportSerializer(sports,many=True)
        activities=Activity.objects.filter(title__icontains=name)
        activitySerializer=ActivitySerializer(activities,many=True)
        
        return Response({'Status':200,'movies':movieSerializer.data,'events':eventSerializer.data,'sports':sportSerializer.data,'activities':activitySerializer.data})


class FilterMovieApi(APIView):
    query_set = Movie.objects.all()

    def get(self, request):
        languages = request.GET.get('languages')
        categories = request.GET.get('categories')
        genre = request.GET.get('genre')
        movies = Movie.objects.all()

        if languages:
            languages = languages.split("|")
            movies = movies.filter(
                languages__in=languages)
        
        if categories:
            categories = categories.split("|")
            movies = movies.filter(
                category__in=categories)
       
        if genre:
            genre = genre.split("|")
            movies = movies.filter(genre__in=genre)
      

        movieSerializer = MovieSerializer(movies, many=True)

        return Response({"status": 200, "filteredMovieData": movieSerializer.data})
    
class FilterEventApi(APIView):
    query_set = Event.objects.all()

    def get(self, request):
        languages = request.GET.get('languages')
        categories = request.GET.get('categories')
        events = Event.objects.all()

        if languages:
            languages = languages.split("|")
            events = events.filter(
                languages__in=languages)

        
        if categories:
            categories = categories.split("|")
            events = events.filter(category__in=categories)
        

        eventSerializer = EventSerializer(events, many=True)

        return Response({"status": 200, "filteredEventData": eventSerializer.data})
    
class FilterSportApi(APIView):
    query_set = Sport.objects.all()

    def get(self, request):
        prices = request.GET.get('prices')
        categories = request.GET.get('categories')
        sports = Sport.objects.all()

        if prices:
            prices = prices.split("|")
            sports = sports.filter(
                prices__in=prices)

        
        if categories:
            categories = categories.split("|")
            sports = sports.filter(category__in=categories)
        

        sportSerializer = SportSerializer(sports, many=True)

        return Response({"status": 200, "filteredSportData": sportSerializer.data})
    
class FilterActivityApi(APIView):
    query_set = Activity.objects.all()

    def get(self, request):
        prices = request.GET.get('prices')
        categories = request.GET.get('categories')
        activities = Activity.objects.all()

        if prices:
            prices = prices.split("|")
            activities = activities.filter(
                prices__in=prices)

        
        if categories:
            categories = categories.split("|")
            activities = activities.filter(category__in=categories)
        

        activitySerializer = ActivitySerializer(activities, many=True)

        return Response({"status": 200, "filteredActivityData": activitySerializer.data})
