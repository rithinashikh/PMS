from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializers import PropertySerializer
from base.models import Note, Property


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)



@api_view(['GET'])
def getProperty(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPropertyById(request, id):
    try:
        property = Property.objects.get(id=id)
        serializer = PropertySerializer(property)
        return Response(serializer.data)
    except Property.DoesNotExist:
        return Response({'error': 'Property not found'}, status=404)
