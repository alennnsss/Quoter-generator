import json
from django.shortcuts import render
from .models import User
from django.http import JsonResponse

def register(request):
    if request.method != 'POST':
        return JsonResponse({'message': 'Use POST request'})
    data = json.loads(request.body)

    username = data["username"]
    email = data["email"]
    password = data["password"]

    user = User.objects.create_user(
        username= username,
        email = email,
        password = password
    )
    return JsonResponse({'message': 'Succesfull authorization'})
# Create your views here.
