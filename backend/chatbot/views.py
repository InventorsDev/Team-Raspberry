# qna_api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from transformers import pipeline

@api_view(['POST'])
def chatbot(request):
    question = request.data.get('question', '')
    context = determine_context(question)
    answer = get_answer(question, context)
    return Response({'question': question, 'context': context, 'answer': answer})

def determine_context(question):
    # Define simple rules for context determination
    if 'explain' in question:
        return "context for explaining"
    elif 'definition' in question:
        return "context for definitions"
    else:
        return "default context"

def get_answer(question, context):
    # Load and use a pre-trained model for question-answering
    qa_pipeline = pipeline("question-answering", model="bert-large-uncased-whole-word-masking", tokenizer="bert-large-uncased")
    answer = qa_pipeline(question=question, context=context)
    return answer['answer']
