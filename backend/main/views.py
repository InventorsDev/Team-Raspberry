# REST imports
from rest_framework import generics
from rest_framework.permissions import *
# Custom import
from .models import *
from .serializers import *
from .permissions import *


# Create your views here.

class VideoList(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly,IsContentCreatorOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(creator_id=self.request.user)


class VideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticatedOrReadOnly, IsVideoOwnerOrReadOnly]
