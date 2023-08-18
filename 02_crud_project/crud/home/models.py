from django.db import models

# Create your models here.

class Usuario(models.Model):
    rut = models.CharField(max_length=10, unique=True, null=False)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)