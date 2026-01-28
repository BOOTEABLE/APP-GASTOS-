import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private url = 'data/datos.json';

  constructor(private http: HttpClient) {
    console.log('GastoService funcionando');
  }

  obtenerDatos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.url);
  }

guardarDatos(gasto: Gasto): Observable<any> {
  return this.http.post(this.url, gasto);
}

}