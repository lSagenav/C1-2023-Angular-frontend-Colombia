import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}
  sendLogin(email: string, password: string): Observable<IUsers> {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post<IUsers>('http://localhost:3000/', body);
  }
}
