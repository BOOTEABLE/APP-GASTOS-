import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.obtenerDatos().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    });
  }
}
