from django.urls import path, include
from rest_framework import routers
from .views import VehicleView, StationView, OperationView

router = routers.DefaultRouter()
router.register(r'vehicle', VehicleView, 'vehicle')
router.register(r'station', StationView, 'station')
router.register(r'operation', OperationView, 'operation')

urlpatterns = [
    path('api/', include(router.urls))
]