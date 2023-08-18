#from django.shortcuts import render, redirect
from django.shortcuts import render, redirect, get_object_or_404
from .models import Usuario
from .forms import UsuarioForm

# Create your views here.

def index(request):
    url = 'home'
    return render(request, 'home/index.html', {"url": url})

def crear(request):
    url = 'crear'
    if request.method == 'POST':
        form = UsuarioForm(data = request.POST)
        if form.is_valid():
            usuario = form.save(commit = False)  ## Formulario en memoria
            usuario.save()                       ## Guarda datos en Base de Datos
            return redirect('leer')
    else:
        form = UsuarioForm()
        return render(request, 'home/crear.html', {"url": url, "form": form})

def leer(request):
    url = 'leer'
    usuarios = Usuario.objects.all()
    return render(request, 'home/leer.html', {"url": url, "usuarios": usuarios})

def actualizar(request):
    url = 'actualizar'
    usuarios = Usuario.objects.all()
    return render(request, 'home/actualizar.html', {"url": url, "usuarios": usuarios})

def actualizarDatosUsuario(request, pk):
    url = 'actualizar'
    usuario = get_object_or_404(Usuario, pk=pk)
    if request.method == 'POST':
        form = UsuarioForm(request.POST, instance=usuario)
        if form.is_valid():
            form.save()
            return redirect('leer')
    else:
        form = UsuarioForm(instance=usuario)
    return render(request, 'home/crear.html', {"url": url, "form": form})

def eliminar(request):
    url = 'eliminar'
    usuarios = Usuario.objects.all()
    return render(request, 'home/eliminar.html', {"url": url, "usuarios": usuarios})

def eliminarDatosUsuario(request, pk):
    url = 'eliminar'
    usuario = Usuario.objects.get(pk=pk)
    usuario.delete()
    return redirect('leer')
