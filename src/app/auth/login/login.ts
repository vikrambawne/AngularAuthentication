import { Component } from '@angular/core';
import { Auth } from '../../core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: false
})
export class Login {
  public email: string = '';
  public password: string = '';

  constructor(private auth: Auth, private router: Router) {}

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: err => console.error('Login failed', err)
      });
  }
}
