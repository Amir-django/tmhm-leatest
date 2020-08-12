from django.db import models

# Create your models here.
class Order(models.Model):
    order_id=models.CharField(max_length=100,primary_key=True)
    name=models.CharField(max_length=100,null=True,blank=True)
    phone=models.CharField(max_length=13,blank=False)
    email = models.EmailField()
    order_amount=models.BigIntegerField()
    order_curruncy=models.CharField(max_length=100,null=True,blank=True)
    order_status=models.CharField(max_length=100,null=True,blank=True)
    def __str__(self):
        return self.name