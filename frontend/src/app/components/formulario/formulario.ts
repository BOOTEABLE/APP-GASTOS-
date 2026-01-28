import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  guardar(): void {

    // 1️⃣ Crear el objeto con los datos del formulario
    const factura = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto,
      fecha: new Date().toISOString()
    };

    // 2️⃣ Obtener lo que ya existe en localStorage
    const key = 'facturas_gastos';
    const lista = JSON.parse(localStorage.getItem(key) || '[]');

    // 3️⃣ Agregar la nueva factura
    lista.push(factura);

    // 4️⃣ Guardar como JSON
    localStorage.setItem(key, JSON.stringify(lista, null, 2));

    // 5️⃣ Mostrar el JSON en pantalla
    this.jsonSalida = JSON.stringify(lista, null, 2);
  }
}
