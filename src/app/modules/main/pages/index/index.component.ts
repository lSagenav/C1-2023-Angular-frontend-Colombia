import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  frmLogin: FormGroup;
  routeRegister: string[];

  constructor(private readonly authService: AuthService) {
    this.routeRegister = ['register'];
    this.frmLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  auth(): void {
    this.authService.GoogleAuth();
  }
}
