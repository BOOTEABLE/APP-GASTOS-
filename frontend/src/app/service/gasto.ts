import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gasto } from '../models/gasto'; // <--- Usamos esta importación

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private key = 'facturas_gastos';

  constructor() { }

  obtenerDatos(): Observable<Gasto[]> {
    const dataString = localStorage.getItem(this.key);
    const data: Gasto[] = dataString ? JSON.parse(dataString) : [];
    return of(data);
  }
}