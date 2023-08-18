from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('crear/', views.crear, name='crear'),
    path('leer/', views.leer, name='leer'),
    path('actualizar/', views.actualizar, name='actualizar'),
    path('actualizarDatosUsuario/<int:pk>/', views.actualizarDatosUsuario, name='actualizarDatosUsuario'),
    path('eliminar/', views.eliminar, name='eliminar'),
    path('eliminarDatosUsuario/<int:pk>/', views.eliminarDatosUsuario, name='eliminarDatosUsuario'),
]