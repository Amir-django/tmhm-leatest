from django.contrib import admin
from .models import *

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    list_display=('order_id','name','phone','email','order_amount','order_curruncy','order_status')

admin.site.register(Order,OrderAdmin)