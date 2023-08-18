from django import forms
from django.db.models import fields
from .models import Usuario

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ('rut', 'nombre', 'apellido')