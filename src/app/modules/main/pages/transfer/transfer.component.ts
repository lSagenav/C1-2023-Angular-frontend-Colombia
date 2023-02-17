import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../../services/transfer/transfer.service';

@Component({
  selector: 'sofka-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
/* The TransferComponent class is a component that has a form with four controls: income, outcome,
amount, and reason */
export class TransferComponent {
  constructor(private readonly serviceTransfer: TransferService) {}

  form = new FormGroup({
    income: new FormControl('', Validators.minLength(2)),
    outcome: new FormControl(''),
    amount: new FormControl(''),
    reason: new FormControl(''),
  });

  async onSubmit(): Promise<void> {
    const input = {
      outcome: this.form.value.outcome,
      income: this.form.value.income,
      amount: this.form.value.amount,
      reason: this.form.value.reason,
    };
    const data = await this.serviceTransfer.getAllTransfer(input);
    console.log('dataaa', input);
  }
}
