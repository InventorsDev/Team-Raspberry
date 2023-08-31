from django.urls import path
from. import views

urlpatterns = [
    # path('chatbot/',views.chatbot_view,name='chatbot'),
    path('chatbot/',views.ChatbotView.as_view()),
    path('translate/', views.TranslationView.as_view(), name='translate-view'),
]
