import {Component} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  template: `
    <div class="tabs">
      <div class="tab-header">
        <button
          *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          [class.active]="selectedTab === tab">
          {{ getTabLabel(tab) }}
        </button>
      </div>
      <div class="tab-body">
        <div class="tab-content-container">
          <ng-content select="[data-tab='1']" *ngIf="selectedTab === 1"></ng-content>
          <ng-content select="[data-tab='2']" *ngIf="selectedTab === 2"></ng-content>
          <ng-content select="[data-tab='3']" *ngIf="selectedTab === 3"></ng-content>
          <ng-content select="[data-tab='4']" *ngIf="selectedTab === 4"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tabs {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
    }

    .tab-header {
      background: var(--nav-background);
      padding: 0.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tab-header button {
      padding: 0.5rem 1rem;
      background: none;
      color: var(--text-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .tab-header button:hover {
      background: var(--hover-color);
    }

    .tab-header button.active {
      color: var(--primary-color);
      background: white;
      border: 1px solid var(--border-color);
    }

    .tab-body {
      padding: 1rem;
      background: white;
      min-height: 300px;
    }

    .tab-content-container {
      height: 100%;
    }
  `]
})
export class TabComponent {
  tabs = [1, 2, 3, 4];
  selectedTab = 1;

  selectTab(tab: number) {
    this.selectedTab = tab;
  }

  getTabLabel(tab: number): string {
    const labels = {
      1: '📝 Información',
      2: '⚙️ Configuración',
      3: '📊 Estadísticas',
      4: '👥 Equipo'
    };
    return labels[tab as keyof typeof labels] || `Tab ${tab}`;
  }
}
