import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from '../../interfaces/users.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'sofka-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent {
  users: IUsers[];
  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    this.users = [];
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    const idStorage = localStorage.getItem('id') as string;
    this.usersService.infoUser().subscribe({
      next: data => {
        (this.users = data), console.log(data);
      },
      error: err => console.error(err),
      complete: () => console.log('complete'),
    });
  }
  redirect() {
    this.router.navigate(['infouser']);
  }

  logout(): void {
    this.authService.SignOut();
  }
}
