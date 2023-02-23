import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountInterface } from '../../interfaces/account.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';
@Component({
  selector: 'sofka-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent {
  accounts: AccountInterface[];
  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    this.accounts = new Array<AccountInterface>();
  }
  envioid(id: string) {
    localStorage.setItem('idcuenta', id);
    this.router.navigate(['transferHistory']);
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    const idStorage = localStorage.getItem('id') as string;
    console.log(localStorage.getItem('token'));

    this.usersService.getAccountById(idStorage).subscribe({
      next: data => {
        console.log(data);
        this.accounts = data;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  redirect() {
    this.router.navigate(['infouser']);
  }

  logout(): void {
    this.authService.SignOut();
  }
}
