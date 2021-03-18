from django.db import models

# Create your models here.
class Employee(models.Model):
  fullname=models.CharField(max_length=300)
  emp_code=models.CharField(max_length=12)
  mobile=models.CharField(max_length=20)

def __str__(self):
  return self.fullname
