from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .serializer import VehicleSerializer
from .models import Vehicle

class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields =  ['usuario', 'activo']
