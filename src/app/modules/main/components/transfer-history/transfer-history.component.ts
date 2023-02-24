import { Component, OnInit } from '@angular/core';
import { TransferInterface } from '../../interfaces/transfer.interface';
import { HistoryService } from '../../services/history/history.service';

@Component({
  selector: 'sofka-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss'],
})
export class TransferHistoryComponent implements OnInit {
  historyTransfer: TransferInterface[];
  historyT: object[];
  idAccount: string;
  constructor(private readonly historyService: HistoryService) {
    this.historyT = new Array<object>();
    this.historyTransfer = new Array<TransferInterface>();
    this.idAccount = '';
  }
  ngOnInit(): void {
    this.idAccount = localStorage.getItem('idcuenta') ?? '';
    this.historyService.getTransferHistory(this.idAccount).subscribe({
      next: data => {
        console.log(data);
        this.historyTransfer = data;
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
