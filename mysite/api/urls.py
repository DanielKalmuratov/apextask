from django.urls import path
from rest_framework import routers
from django.contrib.auth.models import User

from .views import PeopleVewSet, AdminVewSet


router = routers.SimpleRouter()
router.register('users', PeopleVewSet, basename='users')
router.register('admin', AdminVewSet, basename='admin')

urlpatterns = []

urlpatterns += router.urls
