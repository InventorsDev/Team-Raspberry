from django.contrib.auth import get_user_model
from django.db import models
from gdstorage.storage import GoogleDriveStorage

# Create your models here.

LEVEL_CHOICES = (
    ('beginner','Beginner'),
    ('intermidiate','Intermidiate'),
    ('advanced','Advanced')
)

STATUS = (
    (0,'Draft'),
    (1,'Published')
)


# Define Google Drive Storage
gd_storage = GoogleDriveStorage()

class Category(models.Model):
    name = models.CharField(max_length=1000)
    description = models.TextField()
    def __str__(self):
        return self.name

class Topic(models.Model):
    name = models.CharField(max_length=1000)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return self.name


class Video(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(null=True)
    creator_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    video_file = models.FileField(upload_to='videos/file/',storage=gd_storage)
    level = models.CharField(max_length=20,choices=LEVEL_CHOICES,default='beginner')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS,default=0)
    pdf = models.FileField(upload_to='videos/pdf/', blank=True,null=True)
    cover_image = models.ImageField(upload_to='videos/cover_image/',blank=True,null=True)
    course_category  = models.ForeignKey(Topic,on_delete=models.SET_NULL,null=True)


    def __str__(self):
        return self.title




