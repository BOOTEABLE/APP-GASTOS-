import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 1️⃣ Importar el servicio
import { FacturaService } from '../../service/factura'; 

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {

  ruc: string = '99999999001';
  valor: number = 0.0;
  gasto: string = 'Ninguno';

  jsonSalida: string = '';
  mostrarMensaje: boolean = false;

  // 2️⃣ Inyectar el servicio en el constructor
  constructor(private facturaService: FacturaService) {}

  guardar(): void {
    const factura = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };

    this.facturaService.postFactura(factura).subscribe({
      next: (res: any) => { // Agregamos :any aquí
        this.jsonSalida = JSON.stringify(res, null, 2);
        this.mostrarMensaje = true;
        this.valor = 0;
        setTimeout(() => this.mostrarMensaje = false, 3000);
      },
      error: (err: any) => { // Agregamos :any aquí
        console.error('Error al conectar con el backend', err);
      }
    });
  }
}