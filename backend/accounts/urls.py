from django.urls import path, include
from .views import *
from rest_registration.api.views import (
    change_password,
    login,
    logout,
    profile,
    register,
    register_email,
    reset_password,
    send_reset_password_link,
    verify_email,
    verify_registration
)

urlpatterns = [
    path('student-register/', register, name='register'),
    path('student-verify-registration/',
         verify_registration, name='verify-registration'),


    path('creator-register/', CreatorRegistrationView.as_view()),
    path('creator-verify-registration/',
         EmailVerificationView.as_view(), name='email-verify'),
    path('admin-activate-user/', AdminActivateUserView.as_view(),
         name='admin-activate-user'),


    path('login/', login, name='login'),
    path('login/google/',GoogleLoginView.as_view(),name='google_login'),
    path('logout/', logout, name='logout'),
    path('profile/', profile, name='profile'),


    path('send-reset-password-link/', send_reset_password_link,
         name='send-reset-password-link',),
    path('reset-password/', reset_password, name='reset-password'),
    path('change-password/', change_password, name='change-password'),


    path('register-email/', register_email, name='register-email'),
    path('verify-email/', verify_email, name='verify-email'),
    
#     path('dj-rest-auth/',include('dj_rest_auth.urls')),
    path('allauth/', include('allauth.urls')),

    path("~redirect/", view=UserRedirectView.as_view(), name="redirect")
]
