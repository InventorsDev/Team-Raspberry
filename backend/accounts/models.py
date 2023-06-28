from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class MyUser(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_img/',null=True,blank=True)