import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  template: `
    <div class="error-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Por favor, verifica la URL o regresa al inicio.</p>
      <a routerLink="/" class="home-link">Volver al inicio</a>
    </div>
  `,
  imports: [
    RouterLink
  ],
  styleUrl: './error.component.css'
})
export class ErrorComponent {}
