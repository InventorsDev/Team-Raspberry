from rest_framework import viewsets
from rest_framework import generics
from .models import *
from .serializers import *
from .permissions import *
from rest_framework.permissions import *

# Create your views here.

class VideoList(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

class VideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticatedOrReadOnly,IsCreatorOrReadOnly]



    
