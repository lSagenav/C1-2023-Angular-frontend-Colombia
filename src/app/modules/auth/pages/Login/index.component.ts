import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  frmFormulario: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private loginService: LoginService
  ) {
    this.frmFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }

  auth(): void {
    this.authService.GoogleAuth();
  }
  sendLogin() {
    this.authService.singWithEmail(
      this.frmFormulario.get('email')?.getRawValue(),
      this.frmFormulario.get('password')?.getRawValue()
    );
  }
}
