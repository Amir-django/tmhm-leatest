from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('home/', views.home,),
    path('signup/', views.signup),
    path('aboutus/', views.aboutus),
    path('contact/', views.contact),
    path('categories/', views.category),
    path('terms-and-services/', views.termsandservices),
]
