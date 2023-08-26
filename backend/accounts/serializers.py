from rest_framework  import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name','password']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name','profile_picture']



class EmailVerificationSerializer(serializers.Serializer):
    token = serializers.CharField()
    user_id = serializers.CharField()
