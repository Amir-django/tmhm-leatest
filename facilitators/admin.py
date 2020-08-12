from django.contrib import admin
from .models import *

class ExperienceInline(admin.StackedInline):
    model = Experience
    can_delete = False
    verbose_name_plural = 'Experience'
    fk_name = 'facilitator'
class FacilitatorQueriesInline(admin.StackedInline):
    model = FacilitatorQueries
    can_delete = False
    verbose_name_plural = 'Facilitator queries'
    fk_name = 'user'
class ApplicantsAdmin(admin.ModelAdmin):
    inlines = (ExperienceInline,FacilitatorQueriesInline )
    list_display=('Aid','name','user','phone','intrest','status')
    list_select_related = ('facilitatorqueries', 'experience')
    search_fields = ( 'name',)

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(ApplicantsAdmin, self).get_inline_instances(request, obj)
    def approve_facilitator(self,request , queryset):
        for user in queryset:
            facilitator=Facilitator.objects.create(name=user.name,phone=user.phone,user=user)
            facilitator.save()
    def shortlisted_facilitator(self,request , queryset):
        queryset.update(status="Shortlisted")
    def OnHold_facilitator(self,request , queryset):
        queryset.update(status="On Hold")
    def Rejected_facilitator(self,request , queryset):
        queryset.update(status="Rejected")
    OnHold_facilitator.short_description = 'On Hold'
    Rejected_facilitator.short_description = 'Rejected'        
    shortlisted_facilitator.short_description = 'Shortlisted'       
    approve_facilitator.short_description = 'Approve'
    actions = [approve_facilitator, shortlisted_facilitator, OnHold_facilitator, Rejected_facilitator]


# class ExperienceAdmin(admin.ModelAdmin):
#     list_display=('Eid','Linkedin_Url','Website_Url','Youtube_Url','RExperience','TExperience','facilitator')
# class FacilitatorQueriesAdmin(admin.ModelAdmin):
#     ist_display=('Qid','query','status','user')
class FacilitatorAdmin(admin.ModelAdmin):
    list_display=('Fid','name','DOB','phone','PAddress','TAddress','profile','Bio','country','state','zipcode','user')

admin.site.register(Facilitator,FacilitatorAdmin)
admin.site.register(Applicants,ApplicantsAdmin)
