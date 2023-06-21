from rest_framework import generics,status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.permissions import *
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authentication import *
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse

# 
from .models import MyUser
from .serializers import UserSerializer,ProfileSerializer



# Create your views here.

@api_view(['GET'])
def api_root(request,format=None):
    """
    Api Documentation URLs
    """
    return Response(
        {
            "Swagger UI":reverse('swagger-ui',request=request,format=format),
            "Redoc UI":reverse('redoc',request=request,format=format)
        }

    )

class SignUpView(generics.CreateAPIView):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(serializer.validated_data["password"])
        user.save()

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            # login(request, user)
            # User credentials are valid, generate token
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED) 


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes=[TokenAuthentication]

    def get_object(self):
        return self.request.user