import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [InputTextModule, PasswordModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
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
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.loginForm.reset();
        console.log(res);
      },
      error: (err) => {
        const message =
          err?.error?.message ||
          err?.error ||
          err?.message ||
          'Login failed';
        console.log('Error:', message);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
