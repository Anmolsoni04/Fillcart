from django.shortcuts import render
from rest_framework import status
from rest_framework.views import Response
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def user_register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if User.objects.filter(username=username).exists():
        return Response({'error':'Username is already exists'}, status = status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username = username, password = password)
    user.save()
    return Response({'message':'Username is created successfully'}, status = status.HTTP_201_CREATED)

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username = username, password = password)

    if user:
        login(request, user)
        return Response({'message': 'User is logged in successfully'}, status = status.HTTP_200_OK)