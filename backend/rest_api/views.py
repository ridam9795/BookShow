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