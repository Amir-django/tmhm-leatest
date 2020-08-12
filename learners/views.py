from django.shortcuts import render

# Create your views here.

#landing page's learners page
def learner_page(request):
    return render(request, 'learners/index.html')
