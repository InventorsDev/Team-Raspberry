from rest_framework import serializers

class ChatbotSerializer(serializers.Serializer):
    COMMAND_CHOICES = (
        ('define', 'Define'),
        ('synonyms', 'Synonyms'),
        ('antonyms', 'Antonyms'),
        ('wikipedia','Wikipedia'),
        ('summarize','Summarize'),
        # Add other choices here
    )
    command = serializers.ChoiceField(choices=COMMAND_CHOICES)
    input_data = serializers.CharField()

# serializers.py

from rest_framework import serializers

class TranslationSerializer(serializers.Serializer):
    target_language = serializers.CharField()
    text = serializers.CharField()
