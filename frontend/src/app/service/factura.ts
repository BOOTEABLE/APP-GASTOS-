import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto arregla el error de "No suitable injection token"
})
export class FacturaService {
  readonly URL_API = 'http://localhost:3000/api/facturas';

  constructor(private http: HttpClient) {}

  // Usamos Observable<any> para quitar el error de "implicitly has any type"
  postFactura(factura: any): Observable<any> {
    return this.http.post(this.URL_API, factura);
  }

  getFacturas(): Observable<any> {
    return this.http.get(this.URL_API);
  }
}