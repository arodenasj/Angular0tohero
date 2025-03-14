import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  template: `
    <div class="accordion">
      <div class="header" (click)="toggleContent()">
        <ng-content select="header"></ng-content>
        <span class="icon">{{ isExpanded ? '▼' : '▶' }}</span>
      </div>
      @if (isExpanded) {
        <div class="content">
          <ng-content select=".content"></ng-content>
        </div>
      }
    </div>
  `,
  styles: [`
    .accordion {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }
    .header {
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--nav-background);
    }
    .content {
      padding: 1rem;
      border-top: 1px solid var(--border-color);
    }
    .icon {
      font-size: 0.8rem;
    }
  `]
})
export class AccordionComponent {
  isExpanded = false;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
