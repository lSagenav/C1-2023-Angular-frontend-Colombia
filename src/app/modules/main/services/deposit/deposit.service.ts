import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private httpClient: HttpClient) {}
  async getAllDeposit(body: any): Promise<any> {
    this.httpClient
      .post('http://localhost:3000/deposits/newDeposit/', body)
      .subscribe((data: any) => {
        console.log('info transfer', data);
      });
  }
}
