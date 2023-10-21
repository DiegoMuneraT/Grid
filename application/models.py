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
    operative_state = models.IntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    elevation = models.FloatField()
    elevation2 = models.FloatField()
    slope = models.FloatField()
    run = models.FloatField()
    net_force = models.FloatField()
    friction_force = models.FloatField()
    speed = models.FloatField()
    mean_speed = models.FloatField()
    odometer = models.FloatField()
    acceleration = models.FloatField()
    user_email = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    batt_temp =  models.FloatField()
    ext_temp =  models.FloatField()
    power_kw = models.FloatField()
    mec_power = models.FloatField()
    pressure = models.FloatField()
    mean_acc = models.FloatField()
    capacity = models.FloatField()
    vehicle_id = models.IntegerField()
    soc = models.FloatField()
    soh = models.FloatField()
    voltage = models.FloatField()
    current = models.FloatField()
    angle_x = models.FloatField()
    angle_y = models.FloatField()
    charge_current = models.FloatField()
    kwh_km = models.FloatField()
    throttle = models.IntegerField()
    regen_brake = models.FloatField()
    mass = models.IntegerField()
    consumption = models.FloatField()
    range_est = models.IntegerField()
    range_ideal = models.FloatField()
    range_full = models.FloatField()
    drivetime = models.FloatField()
    drivemode = models.CharField(max_length=64)
    charge_time = models.IntegerField()
    charger_type = models.CharField(max_length=64)
    footbrake = models.IntegerField()
    engine_temp = models.FloatField()
    is_charging = models.IntegerField()
    tpms = models.FloatField()
    coulomb = models.FloatField()
    energy = models.FloatField()
    coulomb_rec = models.FloatField()
    energy_rec = models.FloatField()
    freeram = models.IntegerField()
    tasks = models.IntegerField()
    net_signal = models.FloatField()
    rpm = models.IntegerField()
    AcX = models.FloatField()
    AcY = models.FloatField()
    AcZ = models.FloatField()
    humidity = models.FloatField()
    assist_level = models.IntegerField()

    def __str__(self):
        return str(self.vehicle_id)
