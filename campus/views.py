from django.shortcuts import render

# Create your views here.

def campus_page(request):
    return render(request, 'campus/index.html')
