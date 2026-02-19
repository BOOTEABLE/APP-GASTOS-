import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importamos tus servicios (El de Mongo y el de la API de usuarios)
import { FacturaService } from '../../service/factura'; 
import { UserService } from '../../service/user';
// Modelos
import { User } from '../../models/user';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.html',
  styleUrls: ['./reporte.css'], // Asegúrate que sea plural si así lo tienes
})
export class Reporte implements OnInit {

  // Variables para datos
  gastos: any[] = []; // Aquí guardaremos lo de MongoDB
  users: User[] = []; // Aquí lo de la API externa
  
  // Control de interfaz
  vistaActual: string = 'gastos';

  constructor(
    private facturaService: FacturaService, // Servicio de tu Backend/Mongo
    private userService: UserService         // Servicio de Usuarios API
  ) {}

  ngOnInit(): void {
    this.cargarGastos();   // Trae facturas de MongoDB
    this.cargarUsuarios(); // Trae usuarios de la API
  }

  // REEMPLAZADO: Ahora trae datos de MongoDB
  cargarGastos() {
    this.facturaService.getFacturas().subscribe({
      next: (data: any) => { // Agregamos :any
        this.gastos = data;
      },
      error: (e: any) => { // Agregamos :any
        console.error('Error cargando facturas de Mongo:', e);
      }
    });
  }

  cargarUsuarios() {
    this.userService.obtenerDatos().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Usuarios cargados:', data);
      },
      error: (e) => console.error('Error cargando usuarios:', e)
    });
  }

  // REEMPLAZADO: El borrado ahora debería ser una petición DELETE al backend si quisieras,
  // por ahora lo dejamos para limpiar la vista local o puedes quitarlo.
  borrarTodo() {
    if (confirm('¿Seguro que quieres borrar el historial visual? (No borrará la base de datos)')) {
      this.gastos = [];
    }
  }

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }

  calcularTotal(): number {
    return this.gastos.reduce((acc, item) => acc + (Number(item.valor) || 0), 0);
  }
}