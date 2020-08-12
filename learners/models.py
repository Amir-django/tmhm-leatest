from django.db import models
from myauth.models import *
from facilitators.models import *
from LandingPage.models import *


# Create your models here.
class Learners(models.Model):
    Lid=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100,null=True,blank=True)
    DOB=models.DateField(blank=True,null=True)
    phone=models.CharField(max_length=13,blank=False)
    country=models.TextField(blank=True, null=True)
    state=models.TextField(blank=True, null=True)
    PAddress=models.TextField(blank=True,null=True)
    TAddress=models.TextField(blank=True,null=True)
    profile=models.ImageField(upload_to ='learners_profiles/',default='default.png',null=True, blank=True)
    Bio=models.TextField(blank=True,null=True)
    country=models.CharField(max_length=100,blank=True,null=True)
    state=models.CharField(max_length=100,blank=True,null=True)
    zipcode=models.CharField(max_length=7,blank=True,null=True)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE,null=True,related_name='learner')
    enrolled=models.ManyToManyField(Course, related_name = 'enroll')
    status=models.CharField(max_length=100,null=True,blank=True,default='Active')
    
    class Meta:
        
        verbose_name='Learner'
        verbose_name_plural='Learners'
    def __str__(self):
        return self.name

