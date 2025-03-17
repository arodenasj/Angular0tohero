    import { Component } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { Router } from '@angular/router';
    import { AuthService } from '../../../auth/auth.service';

    @Component({
      selector: 'app-login',
      standalone: true,
      imports: [FormsModule],
      template: `
        <div class="component-container">
          <h2>Login Demo</h2>

          <form (ngSubmit)="onSubmit()" class="login-form">
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" id="username" [(ngModel)]="username" name="username" required>
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" [(ngModel)]="password" name="password" required>
            </div>

            @if (error) {
              <div class="alert alert-error">
                {{ error }}
              </div>
            }

            <button type="submit">Login</button>
            @if (authService.isAuthenticated()) {
              <button type="button" (click)="onLogout()">Logout</button>
            }
          </form>
        </div>
      `,
      styleUrl: './login.component.css'
    })
    export class LoginComponent {
      username = '';
      password = '';
      error = '';

      constructor(
        public authService: AuthService,
        private router: Router
      ) {}

      onSubmit() {
        if (this.username === 'admin' && this.password === 'admin123') {
          this.authService.login();
          this.error = '';
          this.router.navigate(['/guards']);
        } else {
          this.error = 'Invalid username or password';
        }
      }

      onLogout() {
        this.authService.logout();
        this.username = '';
        this.password = '';
      }
    }
