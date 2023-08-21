from django.contrib.auth import get_user_model
from django.db import models

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


class Video(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(null=True)
    creator_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    video_file = models.FileField(upload_to='videos/file/')
    level = models.CharField(max_length=20,choices=LEVEL_CHOICES,default='beginner')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS,default=0)
    pdf = models.FileField(upload_to='videos/pdf/', blank=True,null=True)

    def __str__(self):
        return self.title

