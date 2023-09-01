# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from .serializers import *
from nltk.corpus import wordnet
import wikipedia
import requests
import math
import datetime
import random
import nltk

nltk.download('wordnet')

class ChatbotView(generics.GenericAPIView):
    serializer_class = ChatbotSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        command = serializer.validated_data['command']
        input_data = serializer.validated_data['input_data']
        try:
            response = process_user_input(command, input_data)
        except:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({'input_data': input_data, 'response': response}, status=status.HTTP_200_OK)


def process_user_input(command,input_data):
    if command == 'define':
        response = get_word_meaning(input_data)
    elif command == 'synonyms':
        response = find_synonyms(input_data)
    elif command == 'antonyms':
        response = find_antonyms(input_data)
    elif command == 'wikipedia':
        response = search_wikipedia(input_data)
    elif command == 'summarize':
        response = text_summary(input_data)
    return response



def find_synonyms(word):
    synsets = wordnet.synsets(word)
    synonyms = set()
    for synset in synsets:
        for lemma in synset.lemmas():
            synonyms.add(lemma.name())
    return ', '.join(synonyms)

def find_antonyms(word):
    synsets = wordnet.synsets(word)
    antonyms = set()
    for synset in synsets:
        for lemma in synset.lemmas():
            for antonym in lemma.antonyms():
                antonyms.add(antonym.name())
    return ', '.join(antonyms)

def translate_word(word):
    api_key = 'YOUR_API_KEY'
    target_language = 'fr'  # French as an example
    response = requests.get(f'https://translation.googleapis.com/language/translate/v2?key={api_key}&q={word}&target={target_language}')
    translation = response.json().get('data', {}).get('translations', [{}])[0].get('translatedText', '')
    return translation


def search_wikipedia(topic):
    try:
        summary = wikipedia.summary(topic, sentences=1)
        return summary
    except wikipedia.exceptions.DisambiguationError:
        return f"Multiple meanings found for '{topic}'. Please be more specific."
    except wikipedia.exceptions.PageError:
        return f"No Wikipedia page found for '{topic}'."

def get_word_meaning(word):
    synsets = wordnet.synsets(word)
    if synsets:
        return synsets[0].definition()
    else:
        return "Meaning not found."

def text_summary(word):
    url = "https://summarize-texts.p.rapidapi.com/pipeline"
    payload = {'input':word}
    headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "810e4d97dcmsh934985e8b5d5f55p1ec1edjsnaf06bb921da8",
	"X-RapidAPI-Host": "summarize-texts.p.rapidapi.com"
    }
    response = requests.post(url, json=payload, headers=headers)
    summary = response.json().get('output')[0].get('text')
    return summary





# views.py

from rest_framework import generics, status
from rest_framework.response import Response
from translate import Translator

class TranslationView(generics.CreateAPIView):
    serializer_class = TranslationSerializer
    def post(self, request, *args, **kwargs):
        target_language_name = request.data.get('target_language')
        text_to_translate = request.data.get('text')

        translator = Translator(to_lang=target_language_name)
        translated_text = translator.translate(str(text_to_translate))

        return Response({'translated_text': translated_text}, status=status.HTTP_200_OK)


