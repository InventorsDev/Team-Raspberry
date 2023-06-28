from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    creator = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Video
        fields = '__all__'