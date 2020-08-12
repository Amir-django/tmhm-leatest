from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from .views import *

urlpatterns = [

    path('create_order', create_order, name = 'create_order'),
    #path('confirm_order', confirm_order, name = 'confirm_order'),
    path('payment_status', payment_status, name = 'payment_status')
   
]
