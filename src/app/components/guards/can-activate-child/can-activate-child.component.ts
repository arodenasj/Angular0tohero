import { Component } from '@angular/core';

@Component({
  selector: 'app-can-activate-child',
  standalone: true,
  template: `
    <div class="example-card">
      <h3>CanActivateChild Guard Demo</h3>
      <p>Este contenido está protegido por el guard CanActivateChild.</p>
    </div>
  `,
  styleUrls: ['./can-activate-child.component.css']
})
export class CanActivateChildComponent {}
