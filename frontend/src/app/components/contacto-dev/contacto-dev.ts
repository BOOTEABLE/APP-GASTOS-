import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto-dev',
  standalone: true,              // <--- Ya lo tenías así
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto-dev.html',
  styleUrls: ['./contacto-dev.css']
})
export class ContactoDev {

  // Tus datos (¡Puedes cambiarlos por los reales!)
  developer = {
    nombre: 'Emily Mabel Ortega Constante',
    rol: 'Full Stack Developer',
    descripcion: 'Apasionado por crear aplicaciones web modernas y soluciones eficientes con Angular y Node.js.',
    email: 'eortegac9@uest.ups.edu.ec',
    github: 'https://github.com/BOOTEABLE',
    linkedin: 'https://www.linkedin.com/in/emy-ortega-9b0980365/'
  };

  // Variables para el formulario de contacto
  contacto = {
    nombre: '',
    mensaje: ''
  };

  enviarMensaje() {
    if (this.contacto.nombre && this.contacto.mensaje) {
      alert(`¡Gracias ${this.contacto.nombre}! Tu mensaje ha sido enviado simuladamente.`);
      // Limpiamos el formulario
      this.contacto.nombre = '';
      this.contacto.mensaje = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

}