from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

USER_TYPE = (
    ('student','Student'),
    ('content_creator','Content Creator')
)

class MyUser(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_img/',null=True,blank=True)
    creator_email_verified = models.BooleanField(default=False)
    user_type = models.CharField(choices=USER_TYPE,max_length=15,default='student')