from rest_framework import serializers
from myauth.models import *
from django.contrib.auth import get_user_model
from facilitators.models import *
from LandingPage.models import *


# Councelling  section Serializer

class onlinecounsellingSerializer(serializers.ModelSerializer):
    class Meta:
        model=OnlineCounsellingDetails
        fields=('email','phone_number','name')
    
 #Facilitator queries serializer  
class FacilitatorQueriesFormSerializer(serializers.ModelSerializer):
    class Meta:
        model=FacilitatorQueries
        fields=('query','user')
   
# personal section serializer
class RegisterSerializer(serializers.ModelSerializer):
    
    #user_query=FacilitatorQueriesFormSerializer(many=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields = (
                'id', 'email', 'password1', 'password2',
                'first_name', 'last_name'
                )
        read_only_fields = ('id',)
    def validate(self, data):
            if data['password1'] != data['password2']:
                raise serializers.ValidationError('Passwords must match.')
            return data

    def create(self, validated_data):
        data = {
                key: value for key, value in validated_data.items()
                if key not in ('password1', 'password2')
            }
        data['password'] = validated_data['password1']
        return self.Meta.model.objects.create_user(**data)
        # print(u
        # f=Experience.objects.create(facilitator=user, **f_data)
        

 #experience details serializer       
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['Linkedin_Url', 'Website_Url', 'Youtube_Url','RExperience','TExperience','facilitator']

    
    def create(self, validated_data):
        return Experience.objects.create(facilitator=validated_data['facilitator'],Linkedin_Url=validated_data['Linkedin_Url'],Website_Url=validated_data['Website_Url'],Youtube_Url=validated_data['Youtube_Url'],RExperience=validated_data['RExperience'],TExperience=validated_data['TExperience'])
    