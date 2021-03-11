from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import PeopleSerializer,AdminSerializer
from ..models import People
from django.views.decorators.csrf import csrf_protect




class PeopleVewSet(viewsets.ModelViewSet):

    queryset = People.objects.all()
    serializer_class = PeopleSerializer
   

class AdminVewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = AdminSerializer
