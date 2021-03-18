from django.urls import path
from . import views

urlpatterns = [
    path('',views.main,name='api overview'),
    path('employee-list/',views.employeeList,name='employee-list'),
    path('employee-detail/<str:pk>/',views.employeeDetail,name='employee-detail'),
    path('employee-create/',views.employeeCreate,name='employee-create'),
]
