import { Component, OnInit } from '@angular/core';
import { depositInterface } from '../../interfaces/deposit-interface';
import { HistoryService } from '../../services/history/history.service';

@Component({
  selector: 'sofka-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.scss'],
})
export class DepositHistoryComponent implements OnInit {
  historyDeposit: depositInterface[];
  history: object[];
  idUser: string;
  constructor(private readonly historyService: HistoryService) {
    this.history = new Array<object>();
    this.historyDeposit = [];
    this.idUser = '';
  }
  ngOnInit(): void {
    this.idUser = localStorage.getItem('idcuenta') ?? '';
    this.historyService.getDepositAll(this.idUser).subscribe({
      next: data => {
        console.log(data);
        this.historyDeposit = data;
      },
      error: err => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
