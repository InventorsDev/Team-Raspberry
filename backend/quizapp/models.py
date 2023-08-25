from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Quiz(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz_id = models.ForeignKey(Quiz,on_delete=models.CASCADE,related_name='question_ids')
    text = models.TextField()

    def __str__(self):
        return self.text

class Answer(models.Model):
    question_id = models.ForeignKey(Question,on_delete=models.CASCADE,related_name='answer_ids')
    text = models.CharField(max_length=500)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text

class QuizAttempt(models.Model):
    user_id = models.ForeignKey(get_user_model(),on_delete=models.CASCADE)
    quiz_id = models.ForeignKey(Quiz,on_delete=models.CASCADE)
    score = models.FloatField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_id.username}'s attempt on {self.quiz_id.title}: {self.score}"
    


