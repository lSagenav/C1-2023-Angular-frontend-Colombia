import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositService } from '../../services/deposit/deposit.service';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  account: string;
  amount: string;
  constructor(
    private router: Router,
    private readonly depositService: DepositService
  ) {
    this.account = '';
    this.amount = '0';
  }
  redirect() {
    this.router.navigate(['deposit']);
  }

  async onSubmit(): Promise<void> {
    const Input = {
      account: this.account,
      amount: this.amount,
    };
    console.log(Input);
    const data = await this.depositService.getAllDeposit(Input);
    console.log(data);
  }
}
