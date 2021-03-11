from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from hashid_field import HashidField

from ..models import  People



class PeopleSerializer(serializers.ModelSerializer):
    
    id_num = HashidField()

    class Meta:
        model = People
        fields = ('id', 'name', 'id_num', 'phone', 'adress')

  

class AdminSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only':True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
