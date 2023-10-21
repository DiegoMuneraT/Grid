#En este archivos se definen los modelos de bases de datos con el fin de tener una interacción más fácil y amigable con la base de datos.
from django.db import models

# Crear un metodo para serializar
# insert into vehicle(placa, marca, modelo, year, weight, cd, frontal_area, odometer) values('GHW284', 'RENAULT', 'ZOE', 2020, 1528, 0.31, 2.43, 0);
# insert into vehicle(placa, marca, modelo, year, weight, cd, frontal_area, odometer) values('FRV020', 'NISSAN', 'LEAF', 2018, 1584, 0.29, 2.28, 730);
# insert into vehicle(placa, marca, modelo, year, weight, odometer) values('BOTE02', 'ENERGETICA', 'ERICK', 2021, 9, 0);


class Vehicle(models.Model):
    id = models.AutoField(primary_key=True)
    placa = models.CharField(max_length=6)
    marca = models.CharField(max_length=50)
    modelo = models.PositiveIntegerField()
    usuario = models.CharField(max_length=100)
    activo = models.BooleanField(default=True)
    admin = models.CharField(max_length=100, default= '')

    def __str__(self):
        return self.placa


class Station(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()
    elevation = models.FloatField()
    charger_types = models.CharField(max_length=200)
    number_of_chargers = models.IntegerField()

    def __str__(self):
        return self.name


class Operation(models.Model):

    id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField()
    operative_state = models.IntegerField(default= 0)
    latitude = models.FloatField(default= 0)
    longitude = models.FloatField(default= 0)
    elevation = models.FloatField(default= 0)
    elevation2 = models.FloatField(default= 0)
    slope = models.FloatField(default= 0)
    run = models.FloatField(default= 0)
    net_force = models.FloatField(default= 0)
    friction_force = models.FloatField(default= 0)
    speed = models.FloatField(default= 0)
    mean_speed = models.FloatField(default= 0)
    odometer = models.FloatField(default= 0)
    acceleration = models.FloatField(default= 0)
    user_id = models.CharField(max_length=100)
    batt_temp =  models.FloatField(default= 0)
    ext_temp =  models.FloatField(default= 0)
    power_kw = models.FloatField(default= 0)
    mec_power = models.FloatField(default= 0)
    pressure = models.FloatField(default= 0)
    mean_acc = models.FloatField(default= 0)
    capacity = models.FloatField(default= 0)
    vehicle_id = models.CharField(max_length=6)
    soc = models.FloatField(default= 0)
    soh = models.FloatField(default= 0)
    voltage = models.FloatField(default= 0)
    current = models.FloatField(default= 0)
    angle_x = models.FloatField(default= 0)
    angle_y = models.FloatField(default= 0)
    charge_current = models.FloatField(default= 0)
    kwh_km = models.FloatField(default= 0)
    throttle = models.IntegerField(default= 0)
    regen_brake = models.FloatField(default= 0)
    mass = models.IntegerField(default= 0)
    consumption = models.FloatField(default= 0)
    range_est = models.IntegerField(default= 0)
    range_ideal = models.FloatField(default= 0)
    range_full = models.FloatField(default= 0)
    drivetime = models.FloatField(default= 0)
    drivemode = models.CharField(max_length=64, default='')
    charge_time = models.IntegerField(default= 0)
    charger_type = models.CharField(max_length=64, default='')
    footbrake = models.IntegerField(default= 0)
    engine_temp = models.FloatField(default= 0)
    is_charging = models.IntegerField(default= 0)
    tpms = models.FloatField(default= 0)
    coulomb = models.FloatField(default= 0)
    energy = models.FloatField(default= 0)
    coulomb_rec = models.FloatField(default= 0)
    energy_rec = models.FloatField(default= 0)
    freeram = models.IntegerField(default= 0)
    tasks = models.IntegerField(default= 0)
    net_signal = models.FloatField(default= 0)
    rpm = models.IntegerField(default= 0)
    AcX = models.FloatField(default= 0)
    AcY = models.FloatField(default= 0)
    AcZ = models.FloatField(default= 0)
    humidity = models.FloatField(default= 0)
    assist_level = models.IntegerField(default= 0)

    def __str__(self):
        return str(self.vehicle_id)
