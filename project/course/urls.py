from .views import CourseModelViewSet
from django.urls import path, include
from rest_framework import routers

app_name = 'course'

router = routers.DefaultRouter()
router.register(r'courses', CourseModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
