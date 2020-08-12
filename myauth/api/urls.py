from .views import *
from django.urls import path
#from knox import views as knox_views

urlpatterns = [
    path('LandingPage/api/councelling/', OnlineCouncelling.as_view(), name='councelling'),
    path('api/register/', FacilitatorRegisterAPI.as_view(), name='register'),
    #path('api/login/', LoginAPI.as_view(), name='login'),
    # path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    # path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
