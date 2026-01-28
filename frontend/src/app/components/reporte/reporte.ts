import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../service/gasto';
import { Gasto } from '../../models/gasto';

@Component({
  selector: 'app-reporte',
  standalone: false,
  templateUrl: './reporte.html',
  styleUrl: './reporte.css',
})
export class Reporte implements OnInit {

  gastos: Gasto[] = [];

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastoService.obtenerDatos().subscribe(data => {
      this.gastos = data;
      console.log(data);
    });
  }
}
