import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { signupStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private store = inject<Store<AppState>>(Store);
  private fb = inject(FormBuilder);

  signupForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log(this.signupForm.getRawValue());
    this.store.dispatch(signupStart({ ...this.signupForm.getRawValue() }))
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

}
