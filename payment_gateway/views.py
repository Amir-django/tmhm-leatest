from django.shortcuts import render
from django.http import HttpResponse
from LandingPage.models import *
from payment_gateway.forms import *
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers.json import DjangoJSONEncoder
# razor pay account setup
import razorpay
client = razorpay.Client(auth=("rzp_test_0G5HtLCg0WpC26", "y8iPiSBFRf8w2Y1W0L6Q7F55"))



    
#facilitator order subscription 
def create_order(request):
    context={}
    if request.method=='POST':
        
        data={}
        data["name"]=request.POST.get('name')
        data["email"]=request.POST.get('email')
        data["phone"]=request.POST.get('phone')
        data['course']=request.POST.getlist('course')
        
        

       
        course=data['course']
        catlist=[]
        for id in course:
            subcat=SubCategory.objects.get(subCat_id=id)
            catlist.append(subcat.name)
           
        data['order_amount']=1000
        order_amount=len(catlist)*data['order_amount']*100
        context['total']=order_amount/100
        data[order_amount]=context['total']
        print("checkpoint 1")
        name=data['name']
        email=data['email']
        phone=data['phone']
                    
        order_currency = 'INR'
        order_receipt = 'order_rcptid_11'
        data['order_curruncy']=order_currency
        notes = {
            'Shipping address': 'Bommanahalli, Bangalore'}
        print("checkpoint 2")
        response = client.order.create(dict(amount=order_amount, currency=order_currency, receipt=order_receipt, notes=notes, payment_capture='0'))
        print("checkpoint 3")
        order_id = response['id']
        order_status = response['status']
        data['order_id']=order_id
        data['order_status']=order_status
        form=OrderForm(data)
        if form.is_valid():
            form.save()
        else:
            return HttpResponse('<h1>Invalid Form</h1>')
        
        if order_status=='created':
    
            # Server data for user convinience
            
                
            context['price'] = order_amount
            context['name'] = name
            context['phone'] = phone
            context['email'] = email

            context['intrest']=catlist
            
            # data that'll be send to the razorpay for
            context['order_id'] = order_id
            

            return render(request, 'payment_gateway/confirm_order.html',context)
            
        return HttpResponse('<h1>Error in  create order function</h1>')
    else:
        category=Category.objects.all()
        subcategory=SubCategory.objects.all()
        return render(request, 'payment_gateway/order.html', {"category":category,"subcategory":subcategory})
            



#Razor pay payment status after successfull payment
def payment_status(request):
    print(request.POST)
    response = request.POST

    params_dict = {
        'razorpay_payment_id' : response['razorpay_payment_id'],
        'razorpay_order_id' : response['razorpay_order_id'],
        'razorpay_signature' : response['razorpay_signature']
    }


    # VERIFYING SIGNATURE
    try:
        status = client.utility.verify_payment_signature(params_dict)
        return render(request, 'payment_gateway/order_summary.html', {'status': 'Payment Successful'})
    except:
        return render(request, 'payment_gateway/order_summary.html', {'status': 'Payment Faliure!!!'})


