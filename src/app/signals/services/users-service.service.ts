import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponce, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleUserResponce>(`${this.baseUrl}/${id}`).pipe(
      map((response) => response.data),
      tap(console.log)
    );
  }
}
