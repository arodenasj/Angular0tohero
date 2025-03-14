import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="app-header">
      <a routerLink="/">Angular Concepts</a>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  title = 'Angular0tohero';
}
