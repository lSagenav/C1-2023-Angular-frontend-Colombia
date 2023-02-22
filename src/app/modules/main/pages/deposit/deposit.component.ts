import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepositService } from '../../services/deposit/deposit.service';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  constructor(
    private router: Router,
    private readonly depositService: DepositService
  ) {}
  redirect() {
    this.router.navigate(['deposit']);
  }
  form = new FormGroup({
    account: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });

  async onSubmit(): Promise<void> {
    const Input = {
      account: this.form.value.account,
      amount: this.form.value.amount,
    };
    const data = await this.depositService.getAllDeposit(Input);
    console.log(data);
  }
}
