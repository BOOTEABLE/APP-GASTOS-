import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpclient: HttpClient) {}

  obtenerDatos(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.url);
  }
}
