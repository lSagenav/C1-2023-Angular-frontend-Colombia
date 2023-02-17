import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
/* It's a service that makes a POST request to the server */
export class TransferService {
  constructor(private httpClient: HttpClient) {}
  async getAllTransfer(body: any): Promise<any> {
    this.httpClient
      .post('localhost:3000/transfer/create', body)
      .subscribe((data: any) => {
        console.log('dataaaa', data);
      });
  }
}
