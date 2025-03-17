import { Component } from '@angular/core';
    import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [RouterOutlet, RouterLink, RouterLinkActive],
      template: `
        <header class="app-header">
          <h1 class="logo">Angular Concepts</h1>
          <nav class="main-nav">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
            <a routerLink="/about" routerLinkActive="active">Sobre Nosotros</a>
            <a routerLink="/**" routerLinkActive="active">Página de error</a>
          </nav>
        </header>
        <main class="container">
          <router-outlet></router-outlet>
        </main>
      `,
      styleUrl: './app.component.css'
    })
    export class AppComponent {
      title = 'Angular0tohero';
    }
