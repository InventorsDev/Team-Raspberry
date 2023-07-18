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
    # path('',include('rest_registration.api.urls')),
    path('student-register/', register, name='register'),
    path('student-verify-registration/',
         verify_registration, name='verify-registration'),
    path('send-reset-password-link/', send_reset_password_link,
         name='send-reset-password-link',),
    path('reset-password/', reset_password, name='reset-password'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('profile/', profile, name='profile'),
    path('change-password/', change_password, name='change-password'),
    path('register-email/', register_email, name='register-email'),
    path('verify-email/', verify_email, name='verify-email'),
]

# from dj_rest_auth.registration.views import ResendEmailVerificationView, VerifyEmailView
# from dj_rest_auth.views import (
#     PasswordResetConfirmView,
#     PasswordResetView,
# )

# from dj_rest_auth.registration.views import RegisterView
# from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView

# from .views import email_confirm_redirect, password_reset_confirm_redirect


# urlpatterns = [
#     path("signup/", RegisterView.as_view(), name="rest_register"),
#     path("login/", LoginView.as_view(), name="rest_login"),
#     path("logout/", LogoutView.as_view(), name="rest_logout"),
#     path("profile/", UserDetailsView.as_view(), name="rest_user_details"),
#     path("register/verify-email/", VerifyEmailView.as_view(),
#          name="rest_verify_email"),
#     path("register/resend-email/", ResendEmailVerificationView.as_view(),
#          name="rest_resend_email"),
#     path("account-confirm-email/<str:key>/",
#          email_confirm_redirect, name="account_confirm_email"),
#     path("account-confirm-email/", VerifyEmailView.as_view(),
#          name="account_email_verification_sent"),
#     path("password/reset/", PasswordResetView.as_view(),
#          name="rest_password_reset"),
#     path(
#         "password/reset/confirm/<str:uidb64>/<str:token>/",
#         password_reset_confirm_redirect,
#         name="password_reset_confirm",
#     ),
#     path("password/reset/confirm/", PasswordResetConfirmView.as_view(),
#          name="password_reset_confirm"),


# ]