from .views import *
from django.urls import path

urlpatterns = [
    path('mails', email, name='email'),
    
]
