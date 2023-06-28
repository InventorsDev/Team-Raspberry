from .models import MyUser
from rest_framework  import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = MyUser
        fields = ['id','username','email','first_name','last_name','password']

class ProfileSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(use_url=True,allow_null=True,required=False)
    class Meta:
        model = MyUser
        fields = '__all__'