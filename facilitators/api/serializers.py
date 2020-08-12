from rest_framework import serializers
from myauth.models import *
from django.contrib.auth import get_user_model
from facilitators.models import *
from LandingPage.models import *
from LandingPage.models import Course,Category,SubCategory,offer,Facilitator,Queries



  
#Facilitator queries serializer  
class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model=Course
        fields=('Cid','code','title','description','thumbnail','days','months','audience','takeaway','subCat_id')
  
class LiveSessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model=LiveSession
        fields=('title','description','session_start','session_end','days','session_date','session_duration','video','course')
  

class CategorySerializers(serializers.ModelSerializer):
    subCat_id = serializers.PrimaryKeyRelatedField(read_only=False,queryset=SubCategory.objects.all())

    class Meta:
        model=Category
        fields=['cat_id','name']
    
class SubCategorySerializers(serializers.ModelSerializer):
    cat_id = serializers.PrimaryKeyRelatedField(read_only=False,queryset=Category.objects.all())
    class Meta:
        model=SubCategory
        fields=['subcat_id','name','cat_id']


class offerSerializers(serializers.ModelSerializer):
    Fid=serializers.PrimaryKeyRelatedField(read_only=False,queryset=Facilitator.objects.all())
    Cid=serializers.PrimaryKeyRelatedField(read_only=False,queryset=Course.objects.all())

    class Meta:
        model=offer
        fields=['Fid','Cid']

class QueriesSerializer(serializers.ModelSerializer):

    class Meta:
        model=Queries
        fields=['query','reply']
