import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: false,
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion implements OnInit {

  gastos: any[] = [];

  ngOnInit(): void {
    this.gastos = [
      {
        nombre: "Vivienda",
        descripcion: "Arriendo de 350$",
        imagen: "vivienda.png"
      },
      {
        nombre: "Salud",
        descripcion: "Hospital",
        imagen: "salud.jpg"
      }
    ];
  }

  mensaje() {
    alert('Esta es información adicional');
  }

  mensaje1(gasto: any) {
    alert('Esta es información adicional sobre: ' + gasto.nombre);
  }

  borrarDeducible(gasto: any) {
    this.gastos = this.gastos.filter(g => g !== gasto);
  }
}
