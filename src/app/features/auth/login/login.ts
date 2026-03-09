import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth-service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, PasswordModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private store = inject<Store<AppState>>(Store);
  private fb = inject(FormBuilder);


  loginForm = this.fb.nonNullable.group({
    email: ['test@gmail.com', [Validators.required, Validators.email]],
    password: ['test1234', [Validators.required, Validators.minLength(6)]]
  });

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.getRawValue();
    this.store.dispatch(loginStart({ email, password }))
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
