import {ChangeDetectorRef, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  loggedInUsername = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.authService.login();
      this.error = '';
      this.loggedInUsername = 'Admin';
      this.cdr.detectChanges();
      this.router.navigate(['/guards']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
  onLogout() {
    this.authService.logout();
    this.username = '';
    this.password = '';
    this.loggedInUsername = '';
  }
}
