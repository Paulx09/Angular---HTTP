import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: any[] = [];

  title = 'Angular - HTTP';
  // Indicamos el nombre y tipo de la dependencia.
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      // Evento exitoso
      next: users => {
          this.users = users;
      },
      // Evento fallido
      error: err => {
          console.error('Error al listar los usuarios.' + err);
      },
    });
  }
}
