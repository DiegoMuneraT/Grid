# Generated by Django 4.2.5 on 2023-10-21 00:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0002_alter_vehicle_modelo'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='admin',
            field=models.CharField(default='', max_length=100),
        ),
    ]
