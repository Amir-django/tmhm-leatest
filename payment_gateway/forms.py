from django.forms import ModelForm
from .models import *
class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = ('order_id','name','phone','email','order_amount','order_curruncy','order_status')