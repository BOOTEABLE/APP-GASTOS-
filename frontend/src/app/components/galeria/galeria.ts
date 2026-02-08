import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class Galeria {

  // Tu lista de imágenes (Esa déjala igual)
  imagenes = [
    { titulo: 'Facturas de Salud', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80', desc: 'Gastos médicos y farmacia' },
    { titulo: 'Vivienda y Hogar', url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80', desc: 'Arriendos y servicios básicos' },
    { titulo: 'Educación', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80', desc: 'Matrículas y cursos' },
    { titulo: 'Alimentación', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80', desc: 'Supermercado y restaurantes' },
    { titulo: 'Vestimenta', url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80', desc: 'Ropa y accesorios' },
    { titulo: 'Transporte', url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=500&q=80', desc: 'Gasolina y mantenimiento' },
    { titulo: 'Tecnología', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80', desc: 'Equipos de oficina' },
    { titulo: 'Viajes de Negocios', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80', desc: 'Viáticos y hospedaje' },
  ];

  // --- AGREGA ESTO ---
  imagenSeleccionada: any = null; // Guarda la foto que el usuario clicó

  abrirDetalle(img: any) {
    this.imagenSeleccionada = img;
  }

  cerrarDetalle() {
    this.imagenSeleccionada = null;
  }
}