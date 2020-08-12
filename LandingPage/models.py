from django.db import models
from myauth.models import *
# Create your models here.
from django.db.models.signals import post_delete
#from django.dispatch import receive
from django.core.validators import RegexValidator
from facilitators.models import Facilitator

#this table contain all the councelling releted details
class OnlineCounsellingDetails(models.Model):
    councelling_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50,null=True,blank=True)
    email = models.CharField(max_length=30,null=False,blank=False)
    phone_regex = RegexValidator(regex=r'^[6-9]\d{9}$', message="enter valid phone number")
    phone_number = models.CharField(validators=[phone_regex], max_length=15, blank=True) 
    def __str__(self):
        return self.name
    class Meta:
        verbose_name='Free Councelling detail'
        verbose_name_plural='Free Councelling details'

#this table contain all the categories
class Category(models.Model):
    cat_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100,null=False,blank=False)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name='Course Category'
        verbose_name_plural='Course Categories'

#this relation contains all the subcategories releted to particuler categories
class SubCategory(models.Model):
    subCat_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100,null=False,blank=False)
    cat_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name='Subcategories of Categories'
        verbose_name_plural='Subcategories of Categories'

# Audience for courses
class Audience(models.Model):
    audience=models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.audience

#this relation contains all the courses releted to particuler subcategory
class Course(models.Model):
    Audience=(
        ('Students','Students'),
        ('Jobseekers','Jobseekers'),
        ('Freshers','Freshers'),
        ('Working Proffessionals','Working Proffessionals'),
        
        ('Freelencers','Freelencers'),
        ('Enterpreners','Enterpreners'),
        ('Others','Others')

    )
    Cid=models.AutoField(primary_key=True)
    code=models.CharField(max_length=100,null=False,blank=False)
    title=models.CharField(max_length=100,null=False,blank=False)
    description=models.TextField(blank=False,null=True)
    days=models.CharField(max_length=100,null=True,blank=True)
    months=models.CharField(max_length=100,null=True,blank=True)
    thumbnail=models.ImageField(upload_to='courses/',blank=True, null=True)
    audience=models.CharField(choices=Audience,max_length=100,null=True,blank=True)
    takeaway=models.TextField(null=True,blank=True)
    subCat_id = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    class Meta:
        verbose_name='Courses'
        verbose_name_plural='Courses'
def content_file_name(instance, filename):
    return '/'.join(['LiveSessions', instance.course.title, filename])
def content_Rfile_name(instance, filename):
    return '/'.join(['RecordedSession', instance.course.title, filename])

#contain all the recorded videos to the particuler course
class VideoRecorded(models.Model):
    Vid=models.AutoField(primary_key=True)
    title=models.CharField(max_length=100,null=True,blank=True)
    description=models.TextField(blank=True,null=True)
    session_duration=models.CharField(max_length=100,null=True,blank=True)
    video=models.FileField(upload_to =content_Rfile_name,null=True,blank=True)
    course=models.ForeignKey(Course, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    class Meta:
        verbose_name='Recorded Sessions'
        verbose_name_plural='Recorded Sessions'

#contain all the liveSessions to the particuler course
class LiveSession(models.Model):
    Vid=models.AutoField(primary_key=True)
    title=models.CharField(max_length=100,null=True,blank=True)
    description=models.TextField(blank=True,null=True)
    session_duration=models.CharField(max_length=100,null=True,blank=True)
    session_date=models.DateField(null=True,blank=True)
    session_start=models.TimeField(auto_now_add=True)
    session_end=models.TimeField(auto_now_add=True)
    days=models.CharField(max_length=100,null=True,blank=True)
    video=models.FileField(upload_to =content_file_name,null=True,blank=True)
    course=models.ForeignKey(Course, on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    class Meta:
        verbose_name='Live Sessions'
        verbose_name_plural='Live Sessions'


#this relation associate a particuler facilitator with particuler course
class offer(models.Model):
    Fid = models.ForeignKey(Facilitator, on_delete=models.CASCADE)
    Cid = models.ForeignKey(Course, on_delete=models.CASCADE)
    def __str__(self):
        return self.Fid.name
    class Meta:
        verbose_name='Details about Courses and Facilitator'
        verbose_name_plural='Details about Courses and Facilitators'

class Queries(models.Model):
    Fid=models.ForeignKey(Facilitator, on_delete=models.CASCADE)
    query=models.TextField(max_length=500)
    reply=models.TextField(max_length=500,blank=True, null=True)
    def __str__(self):
        return self.Fid.name

    class Meta:
        verbose_name='Support For Facilitators'
        verbose_name_plural='Support For Facilitators'


