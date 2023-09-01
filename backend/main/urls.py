from django.urls import path,include
from rest_framework import routers
from .views import *

# router = routers.DefaultRouter()
# router.register('videos', VideoViewSet)

# urlpatterns = [
#     path('',include(router.urls)),
# ]


urlpatterns = [
    path('videos/',VideoList.as_view(),name='video_list'),
    path('videos/<int:id>/',VideoDetail.as_view(),name = 'video_detail'),
    path('stream-video/<int:video_id>/', stream_video, name='stream_video'),
]
