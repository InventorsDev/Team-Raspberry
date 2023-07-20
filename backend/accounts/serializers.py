from rest_framework  import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

class CreatorRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name','password']


class EmailVerificationSerializer(serializers.Serializer):
    token = serializers.CharField()
    user_id = serializers.CharField()
