from django.db import models
from django.contrib.auth.models import User

TYPE_CHOICES = (
    ('Villa', 'Villa'),
    ('Flat', 'Flat'),
    ('House', 'House'),

)

class Property(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.CharField(max_length=50,default='0')
    location = models.CharField(max_length=50)
    amenities = models.TextField()
    image = models.ImageField(upload_to='imagestore/')
    type = models.CharField(choices=TYPE_CHOICES, max_length=50, default='Flat')

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()
