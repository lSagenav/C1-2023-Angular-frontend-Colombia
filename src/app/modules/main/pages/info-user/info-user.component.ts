import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from '../../../auth/interfaces/users.interface';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
  users: IUsers[];
  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    this.users = [];
  }
  ngOnInit(): void {
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
