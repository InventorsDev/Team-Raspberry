from rest_framework import serializers
from .models import Quiz, Question, Answer, QuizAttempt

class QuizSerializer(serializers.ModelSerializer):
    question_ids = serializers.PrimaryKeyRelatedField(many=True,queryset=Question.objects.all())
    class Meta:
        model = Quiz
        fields = ['id', 'title', 'description','question_ids']

class QuestionSerializer(serializers.ModelSerializer):
    answer_ids = serializers.PrimaryKeyRelatedField(many=True,queryset=Answer.objects.all())
    class Meta:
        model = Question
        fields = ['id', 'text', 'quiz_id','answer_ids']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'text', 'question_id', 'is_correct']

class QuizAttemptSerializer(serializers.ModelSerializer):
    selected_answers = serializers.DictField(write_only=True) 
    user_id = serializers.PrimaryKeyRelatedField(read_only=True)
    score = serializers.IntegerField(read_only=True)
    class Meta:
        model = QuizAttempt
        fields = ['id', 'user_id', 'quiz_id', 'score', 'timestamp','selected_answers']


    def create(self, validated_data):
        selected_answers = validated_data.pop('selected_answers')
        quiz = validated_data['quiz_id']
        correct_answers = 0

        # Process selected_answers and calculate the score
        for question_id, selected_answer_id in selected_answers.items():
            print(question_id,selected_answer_id)
            question = quiz.question_ids.get(id=question_id)
            correct_answer_ids = question.answer_ids.filter(is_correct=True).values_list('id', flat=True)            
            if int(selected_answer_id) in correct_answer_ids:
                correct_answers += 1

        total_questions = quiz.question_ids.count()
        score = (correct_answers / total_questions) * 100

        instance = super().create({
            **validated_data,
            'score': score,
        })
        return instance


