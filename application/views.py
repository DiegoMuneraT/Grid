from rest_framework import viewsets
from .serializer import VehicleSerializer
from .models import Vehicle

class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()

