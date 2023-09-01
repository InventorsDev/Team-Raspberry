# REST imports
from rest_framework import generics
from rest_framework.permissions import *
# Custom import
from .models import *
from .serializers import *
from .permissions import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import FileResponse
from gdstorage.storage import GoogleDriveStorage



# Create your views here.

class VideoList(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly,]

    def perform_create(self, serializer):
        serializer.save(creator_id=self.request.user)


class VideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticatedOrReadOnly, IsVideoOwnerOrReadOnly]


@api_view(['GET'])
def stream_video(request, video_id):
    try:
        video = Video.objects.get(pk=video_id)
        # Initialize GoogleDriveStorage
        gds = GoogleDriveStorage()
        file_path = video.video_file.name  # Assuming you've stored the video file path in the model

        # Get the video file from Google Drive
        video_file = gds.open(file_path, 'rb')
        response = FileResponse(video_file)

        # Set appropriate content type for streaming video
        response['Content-Type'] = 'video/mp4'  # Change this to the appropriate video format

        return response

    except Video.DoesNotExist:
        # Handle video not found case
        pass

