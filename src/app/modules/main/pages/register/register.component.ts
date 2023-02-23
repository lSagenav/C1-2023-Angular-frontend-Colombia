import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  frmFormulario: FormGroup;
  routrHome: string[];

  constructor(
    private readonly user$: UsersService,
    private readonly authService: AuthService
  ) {
    this.routrHome = ['../'];
    this.frmFormulario = new FormGroup({
      documentTypeId: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }
  senData(): void {
    this.authService.SignUp(
      this.frmFormulario.get('email')?.value,
      this.frmFormulario.get('password')?.value,
      this.frmFormulario.getRawValue()
    );
  }

  conlole(): void {
    console.log(this.frmFormulario);
  }
}
