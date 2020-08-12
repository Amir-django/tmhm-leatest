from django.shortcuts import render

# Landing  page
def home(request):
    return render(request,'LandingPage/index.html')


# Landing page signup form
def signup(request):
    return render(request, 'LandingPage/signup/signup.html')

#Landing page about us page
def aboutus(request):
    return render(request, 'LandingPage/aboutus/aboutus.html')

#Landing page Contact us page
def contact(request):
    return render(request, 'LandingPage/contactus/contact.html')

#Landing page categories page
def category(request):
    return render(request, 'LandingPage/categories/categories.html')

#Landing page tems and services page
def termsandservices(request):
    return render(request, 'LandingPage/terms/terms.html')