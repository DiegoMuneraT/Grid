from django.contrib import admin
from .models import Vehicle, Station, Operation

# Register your models here.

admin.site.register(Vehicle)
admin.site.register(Station)
admin.site.register(Operation)
