import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// Inyección de dependencias propio de Angular al crear el service
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://fakestoreapi.com/users'
  
  // Inyectamos la dependencia del HttpClient que hicimos en app.module
  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsers(): Observable<any[]> {
    // Indicamos método (get), el tipo de dato que recuperaremos y la API de uso.
    // .pipe(): Este método se utiliza para encadenar operadores que transforman el flujo de datos.
    return this.http.get<any[]>(this.apiURL).pipe(
      // Utiliza 'map' para transformar la respuesta de la solicitud.
      map(users => 
        // Para cada usuario en la lista de usuarios (API), aplica la función 'transformUser'
        users.map(this.transformUser))
    );
  }

  private transformUser(user: any): any {
    // Retornamos un User con solo las propiedades necesarias.
    return {
      id: user.id,
      name: `${user.name.firstname} ${user.name.lastname}`,
      address: `${user.address.city}, ${user.address.street}`,
    }
  }
}
