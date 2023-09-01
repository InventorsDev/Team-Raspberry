from rest_framework import serializers
from .models import *

class VideoSerializer(serializers.ModelSerializer):
    creator_id = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Video
        fields = '__all__'



class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    subcategories = TopicSerializer(many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = '__all__'



        