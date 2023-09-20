from django.urls import path, include
from rest_framework import routers
from .views import VehicleView

router = routers.DefaultRouter()
router.register(r'vehicle', VehicleView, 'vehicle')

urlpatterns = [
    path('api/', include(router.urls))
]