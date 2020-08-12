from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model
from .models import *
from facilitators.models import Facilitator



class CustomUserAdmin(UserAdmin):
    """Define admin model for custom User model with no username field."""
    inlines = ( )
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name','role')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('id','email', 'first_name', 'last_name','get_role')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    list_select_related =  []
   

    def get_role(self, instance):
        value=instance.role
        if value==3:
            return "Admin"
        elif value==2:
            return "Facilitator"
        else:
            return "Visiter"
    get_role.short_description = 'Role'
    # def get_phone(self, instance):
    #     return instance.profile.phone
    # get_phone.short_description = 'Phone'



    # def get_inline_instances(self, request, obj=None):
    #     if not obj:
    #         return list()
    #     return super(CustomUserAdmin, self).get_inline_instances(request, obj)
   

admin.site.register(get_user_model(), CustomUserAdmin)