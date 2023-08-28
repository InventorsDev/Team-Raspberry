from django.urls import path
from .views import *

urlpatterns = [
    path('quizzes/',QuizView.as_view(),name='quiz_list'),
    path('quizzes/<int:pk>/',QuizDetail.as_view(),name='quiz_detail'),
    path('questions/',QuestionView.as_view(),name='question_list'),
    path('questions/<int:pk>/',QuestionDetail.as_view(),name='question_detail'),
    path('answers/',AnswerView.as_view(),name='answers_list'),
    path('answers/<int:pk>/',AnswerDetail.as_view(),name='answer_detail'),
    path('quiz-attempts/',QuizAttemptView.as_view(),name='quiz_attempt'),
    path('quiz-attempts/<int:pk>/',QuizAttemptDetail.as_view(),name='quiz_attempt_detail'),
]
