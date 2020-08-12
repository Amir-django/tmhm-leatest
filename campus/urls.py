from django.urls import path
from . import views

urlpatterns = [
    path('campus/', views.campus_page, name='campus_page'),
]
