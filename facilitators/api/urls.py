
from django.urls import path
from facilitators.api.views import *
from facilitators.api import views
#from knox import views as knox_views

urlpatterns = [
    path('facilitator/api/createcourse/', CreateCourseApi.as_view(), name='createcourseapi'),
    path('facilitator/api/dashboard/explore', views.courses, name="course"),
    path('facilitator/api/support',views.support,name='support')
    #path('api/login/', LoginAPI.as_view(), name='login'),
    # path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    # path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
