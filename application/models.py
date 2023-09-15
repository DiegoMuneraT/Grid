#En este archivos se definen los modelos de bases de datos con el fin de tener una interacción más fácil y amigable con la base de datos.

from datetime import datetime
from django.db import models

# Crear un metodo para serializar
# insert into vehicle(placa, marca, modelo, year, weight, cd, frontal_area, odometer) values('GHW284', 'RENAULT', 'ZOE', 2020, 1528, 0.31, 2.43, 0);
# insert into vehicle(placa, marca, modelo, year, weight, cd, frontal_area, odometer) values('FRV020', 'NISSAN', 'LEAF', 2018, 1584, 0.29, 2.28, 730);
# insert into vehicle(placa, marca, modelo, year, weight, odometer) values('BOTE02', 'ENERGETICA', 'ERICK', 2021, 9, 0);


class Vehicle(models.Model):
    id = models.AutoField(primary_key=True)
    placa = models.CharField(max_length=6)
    marca = models.CharField(max_length=50)
    modelo = models.IntegerField()
    usuario = models.IntegerField()
    activo = models.BooleanField(default=True)


class Station(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()
    elevation = models.FloatField()
    charger_types = models.JSONField()
    number_of_chargers = models.IntegerField()


class Operation(models.Model):

    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(
        db.DateTime,
        index=True,
        default=datetime.strptime(
            (
                datetime.now(pytz.timezone("America/Bogota")).strftime(
                    "%Y-%m-%d %H:%M:%S"
                )
            ),
            "%Y-%m-%d %H:%M:%S",
        ),
    )
    operative_state = db.Column(db.Integer)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    elevation = db.Column(db.Float)
    elevation2 = db.Column(db.Float)
    slope = db.Column(db.Float)
    run = db.Column(db.Float)
    net_force = db.Column(db.Float)
    friction_force = db.Column(db.Float)
    speed = db.Column(db.Float)
    mean_speed = db.Column(db.Float)
    odometer = db.Column(db.Float)
    acceleration = db.Column(db.Float)
    user_name = db.Column(db.String(64))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    batt_temp = db.Column(db.Float)
    ext_temp = db.Column(db.Float)
    power_kw = db.Column(db.Float)
    mec_power = db.Column(db.Float)
    pressure = db.Column(db.Float)
    mean_acc = db.Column(db.Float)
    capacity = db.Column(db.Float)
    vehicle_id = db.Column(db.String(64))
    soc = db.Column(db.Float)
    soh = db.Column(db.Float)
    voltage = db.Column(db.Float)
    current = db.Column(db.Float)
    angle_x = db.Column(db.Float)
    angle_y = db.Column(db.Float)
    charge_current = db.Column(db.Float)
    kwh_km = db.Column(db.Float)
    throttle = db.Column(db.Integer)
    regen_brake = db.Column(db.Float)
    mass = db.Column(db.Integer)
    consumption = db.Column(db.Float)
    range_est = db.Column(db.Integer)
    range_ideal = db.Column(db.Float)
    range_full = db.Column(db.Float)
    drivetime = db.Column(db.Float)
    drivemode = db.Column(db.String(64))
    charge_time = db.Column(db.Integer)
    charger_type = db.Column(db.String(64))
    footbrake = db.Column(db.Integer)
    engine_temp = db.Column(db.Float)
    is_charging = db.Column(db.Integer)
    tpms = db.Column(db.Float)
    coulomb = db.Column(db.Float)
    energy = db.Column(db.Float)
    coulomb_rec = db.Column(db.Float)
    energy_rec = db.Column(db.Float)
    freeram = db.Column(db.Integer)
    tasks = db.Column(db.Integer)
    net_signal = db.Column(db.Float)
    rpm = db.Column(db.Integer)
    AcX = db.Column(db.Float)
    AcY = db.Column(db.Float)
    AcZ = db.Column(db.Float)
    humidity = db.Column(db.Float)
    assist_level = db.Column(db.Integer)
