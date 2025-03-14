import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  template: `
    <div class="panel">
      <div class="panel-header">
        <ng-content select="header"></ng-content>
      </div>
      <div class="panel-body">
        <ng-content select=".body"></ng-content>
      </div>
      <div class="panel-footer">
        <ng-content select="footer"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .panel {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .panel-header {
      background: var(--nav-background);
      padding: 1rem;
      border-bottom: 1px solid var(--border-color);
    }
    .panel-body {
      padding: 1rem;
    }
    .panel-footer {
      background: var(--nav-background);
      padding: 1rem;
      border-top: 1px solid var(--border-color);
    }
  `]
})
export class PanelComponent {}
