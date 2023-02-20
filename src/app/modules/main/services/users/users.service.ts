import { newUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewUSer } from '../../interfaces/newUser.interface';
import { Observable } from 'rxjs';
import { IUsers } from '../../interfaces/users.interface';
import { AccountInterface } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: newUserModel): Observable<INewUSer> {
    return this.httpClient.post<INewUSer>(
      'http://localhost:3000/security/sign-up/',
      user
    );
  }
  infoUser() {
    return this.httpClient.get<IUsers[]>('http://localhost:3000/customers/');
  }

  getAccountById(id: string): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(
      'http://localhost:3000/customers/' + id
    );
  }
}
