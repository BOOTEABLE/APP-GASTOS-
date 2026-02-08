import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoService } from '../../service/gasto';
import { Gasto } from '../../models/gasto';
import { UserService } from '../../service/user'; // <--- IMPORTANTE
import { User } from '../../models/user';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.html',
  styleUrl: './reporte.css',
})
export class Reporte implements OnInit {

  gastos: Gasto[] = [];
  users: User[] = [];
  vistaActual: string = 'gastos';
  constructor(
    private gastoService: GastoService,
    private userService: UserService  // <--- Inyección del servicio de usuarios
  ) {}
  

  ngOnInit(): void {
    this.cargarGastos();
    this.cargarUsuarios(); // <--- Llamamos a la función al iniciar
  }

  cargarGastos() {
    this.gastoService.obtenerDatos().subscribe(data => {
      this.gastos = data;
    });
  }

  // Nueva función para consumir tu servicio real
  cargarUsuarios() {
    this.userService.obtenerDatos().subscribe({
      next: (data) => {
        this.users = data; // Guardamos los datos de la API
        console.log('Usuarios cargados:', data);
      },
      error: (e) => console.error('Error cargando usuarios:', e)
    });
  }

  borrarTodo() {
    if (confirm('¿Seguro que quieres borrar todo el historial de facturas?')) {
      localStorage.removeItem('facturas_gastos');
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
