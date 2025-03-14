import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  `]
})
export class CardComponent {}
