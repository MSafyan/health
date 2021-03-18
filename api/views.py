from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EmployeeSerializers

from .models import Employee
# Create your views here.
@api_view(['GET'])
def main(request):
  api_urls={
    'List':'/employee-list/',
    'Detail_view':'/employee-detail/<str:pk>',
    'Create':'employee-create',
  }
  return Response('api base point')

@api_view(['GET'])
def employeeList(response):
  employees=Employee.objects.all()
  serializer=EmployeeSerializers(employees,many=1)
  return Response(serializer.data)

@api_view(['GET'])
def employeeDetail(response,pk):
  employees=Employee.objects.get(id=pk)
  serializer=EmployeeSerializers(employees,many=False)
  return Response(serializer.data)

@api_view(['POST'])
def employeeCreate(request):
  serializer=EmployeeSerializers(data=request.data)
  if(serializer.is_valid()):
    serializer.save()

  return Response(serializer.data)