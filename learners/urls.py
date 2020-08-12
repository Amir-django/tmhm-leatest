from django.urls import path
from . import views

urlpatterns = [
    path('learner/', views.learner_page, name='learner_page'),
]
