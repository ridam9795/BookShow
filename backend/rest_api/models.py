from django.db import models

# Create your models here.
Language_Choice = (('Hindi', 'Hindi'), ('English', 'English'),
                   ('Kannada', 'Kannada'), ('Bengali', 'Bengali'), ('Marathi', 'Marathi'), ('Tamil', 'Tamil'))
Movie_Genre_Choice = (('Drama', 'Drama'), ('Fantacy', 'Fantacy'),
                      ('Classic', 'Classic'), ('Comedy', 'Comedy'))
Movie_Categories = (('Theater', 'Theater'),
                    ('Story Telling', 'Story Telling'), ('Imporv Theater', 'Imporv Theater'))

class Generic(models.Model):
    title = models.CharField(max_length=500)
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

    def __str__(self) -> str:
        return super().title


class Sport(Generic):
    image = models.ImageField(upload_to='sports', default=None, null=True)

    def __str__(self) -> str:
        return super().title


class Activity(Generic):
    image = models.ImageField(upload_to='activities', default=None, null=True)
    genre = models.CharField(max_length=50, null=True)

    language = models.CharField(
        choices=Language_Choice, max_length=128, blank=True)

    def __str__(self) -> str:
        return super().title
