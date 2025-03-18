import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private apiUrl = 'https://your-api-url.com/auth';

  constructor(private router: Router, private http: HttpClient) {}


  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/guards/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
