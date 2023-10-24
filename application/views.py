from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from .serializer import VehicleSerializer, StationSerializer, OperationSerializer
from .models import Vehicle, Station, Operation

class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields =  ['usuario', 'activo', 'admin']


class StationView(viewsets.ModelViewSet):
    serializer_class = StationSerializer
    queryset = Station.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields =  ['name','number_of_chargers', 'charger_types',]

class OperationView(viewsets.ModelViewSet):
    

    serializer_class = OperationSerializer
    queryset = Operation.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields =  ['vehicle_id', 'user_id',]
