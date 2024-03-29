from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model

# Create your models here.
User=get_user_model()
Language_Choice = (('Hindi', 'Hindi'), ('English', 'English'),
                   ('Kannada', 'Kannada'), ('Bengali', 'Bengali'), ('Marathi', 'Marathi'), ('Tamil', 'Tamil'),('Telugu','Telugu'))
Movie_Genre_Choice = (('Drama', 'Drama'), ('Fantacy', 'Fantacy'),
                      ('Classic', 'Classic'), ('Comedy', 'Comedy'),('Action','Action'),('Adventure','Adventure'))
Movie_Categories = (('Theater', 'Theater'),
                    ('Story Telling', 'Story Telling'), ('Imporv Theater', 'Imporv Theater'))
Event_Categories = (('Comedy Shows', 'Comedy Shows'),
                    ('Workshops', 'Workshops'), ('Music Shows', 'Music Shows'), ('Online Streaming Events', 'Online Streaming Events'), ('Meetups', 'Meetups'), ('Kids', 'Kids'))
Sport_Categories = (('Cricket', 'Cricket'),
                    ('Online Games', 'Online Games'), ('E Sports', 'E Sports'), ('Chess', 'Chess'), ('Football', 'Football'),('Others','Others'))
Prices = (('Free', 'Free'), ('0-500', '0-500'),
          ('501-2000', '501-2000'), ('Above 2000', 'Above 2000'))
Activity_Categories = (('Adventure', 'Adventure'),
                       ('Tourist Attractions', 'Tourist Attractions'), ('NightLife', 'NightLife'), ('Food and Drinks', 'Food and Drinks'), ('Parties', 'Parties'), ('Gaming', 'Gaming'))
Type = (('movie', 'movie'), ('sport', 'sport'),
          ('event', 'event'), ('activity', 'activity'))

class Generic(models.Model):
    showID=models.CharField(null=True,blank=True,max_length=256)
    title = models.CharField(max_length=500)
    type=models.CharField(choices=Type,max_length=128,default='movie' )
    desc = models.TextField()
    languages = models.CharField(
        choices=Language_Choice, max_length=128, default='Hindi')

    class Meta:
        abstract = True


class Movie(Generic):
    genre = models.CharField(choices=Movie_Genre_Choice,
                             max_length=128, default='Drama')
    category = models.CharField(
        choices=Movie_Categories, max_length=128, default='Theater')
    image = models.ImageField(upload_to='movie', default=None, blank=True)

    def __str__(self) -> str:
        return self.title


class Event(Generic):
    image = models.ImageField(upload_to='events', default=None, null=True)
    category = models.CharField(
        choices=Event_Categories, max_length=128, default='Workshops')

    def __str__(self) -> str:
        return super().title


class Sport(Generic):
    image = models.ImageField(upload_to='sports', default=None, null=True)
    category = models.CharField(
        choices=Sport_Categories, max_length=128, default='Cricket')
    prices = models.CharField(choices=Prices, max_length=128, default='Free')

    def __str__(self) -> str:
        return super().title


class Activity(Generic):
    image = models.ImageField(upload_to='activities', default=None, null=True)
    category = models.CharField(
        choices=Activity_Categories, max_length=128, default='Adventure')
    prices = models.CharField(choices=Prices, max_length=128, default='Free')

    def __str__(self) -> str:
        return super().title
    
class Profile(models.Model):
    user=models.OneToOneField(User,related_name='profile',on_delete=models.CASCADE)
    image=models.ImageField(upload_to="profile_image",default=None,null=True)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)
    
