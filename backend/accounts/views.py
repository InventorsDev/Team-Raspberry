from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import *
from rest_framework.authentication import *
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse as rest_reverse


from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model
from django.conf import settings


from .serializers import CreatorRegistrationSerializer, EmailVerificationSerializer

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import RedirectView


User = get_user_model()

    

@api_view(['GET'])
def api_root(request,format=None):
    """
    Api Documentation URLs
    """
    return Response(
        {
            "Swagger UI":rest_reverse('swagger-ui',request=request,format=format),
            "Redoc UI":rest_reverse('redoc',request=request,format=format)
        }

    )

class UserRedirectView(LoginRequiredMixin, RedirectView):
    """
    This view is needed by the dj-rest-auth-library in order to work the google login. It's a bug.
    """

    permanent = False

    def get_redirect_url(self):
        return "redirect-url"


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = 'http://localhost:3000'
    client_class = OAuth2Client

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)


class CreatorRegistrationView(generics.CreateAPIView):
    serializer_class = CreatorRegistrationSerializer

    def send_verification_email(self, user):
        current_site = get_current_site(self.request)
        user_id = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)
        verification_url = reverse('email-verify')
        verification_url = f'{current_site}{verification_url}?user_id={user_id}&token={token}'

        email_subject = 'Verify your email'
        email_body = render_to_string(
            'email_verification.html',
            {
                'user': user,
                'verification_url': verification_url,
                'current_site': current_site.domain,
            }
        )
        email = EmailMessage(email_subject, email_body, to=[user.email])
        email.send()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        # Send verification email
        self.send_verification_email(user)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(serializer.validated_data["password"])
        user.is_active = False  # Set the user as inactive initially
        user.save()
        return user


class EmailVerificationView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    def send_activation_email_to_admins(self, user, current_site):
        admins = User.objects.filter(is_staff=True)

        for admin in admins:
            user_id = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            activation_url = reverse('admin-activate-user')
            activation_url = f'{current_site}{activation_url}?user_id={user_id}&token={token}'

            email_subject = 'New User Activation Required'
            email_body = render_to_string(
                'activation_notification.html',
                {
                    'user': user,
                    'admin': admin,
                    'activation_url': activation_url,
                    'current_site': current_site.domain,
                }
            )
            email = EmailMessage(email_subject, email_body, to=[admin.email])
            email.send()

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user_id = serializer.validated_data['user_id']

        try:
            uid = force_str(urlsafe_base64_decode(user_id))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({'detail': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        if not default_token_generator.check_token(user, token):
            return Response({'detail': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        if user.creator_email_verified == True:
            return Response({'detail':'Email is already verified'},status=status.HTTP_400_BAD_REQUEST)
        user.creator_email_verified = True
        user.save()

        # Send activation notification email to admins
        current_site = get_current_site(self.request)
        self.send_activation_email_to_admins(user, current_site)

        return Response({'detail': 'Email verification successful.'})

class AdminActivateUserView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    def send_activated_account_email(self, user):
        email_subject = 'Account activated'
        email_body = render_to_string(
            'activated_account.html',
            {
                'user': user,
            }
        )
        email = EmailMessage(email_subject, email_body, to=[user.email])
        email.send()

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user_id = serializer.validated_data['user_id']

        try:
            uid = force_str(urlsafe_base64_decode(user_id))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({'detail': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        if not default_token_generator.check_token(user, token):
            return Response({'detail': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)
        user.is_active = True
        user.user_type = 'content_creator'
        user.save()
        self.send_activated_account_email(user)
        return Response({'detail': 'Account activated successful.'})
