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
  frmLogin: FormGroup;
  routeRegister: string[];
  frmFormulario: FormGroup = new FormGroup({});

  constructor(
    private readonly authService: AuthService,
    private loginService: LoginService
  ) {
    this.routeRegister = ['register'];
    this.frmLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.htmlformulario();
  }
  htmlformulario(): void {
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
    const { email, password } = this.frmFormulario.value;
    this.loginService.sendLogin(email, password).subscribe({
      next: token => {
        localStorage.setItem('token', token.access_token);
        localStorage.setItem('id', token.id);
      },
      error: err => {
        console.log(err.error);
      },
    });
  }
}
