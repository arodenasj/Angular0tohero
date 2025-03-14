import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="component-container">
      <h2>Control Flow Examples</h2>

      <section class="example-card">
        <h3>&#64;if Conditional</h3>
        <div class="alert alert-info">
          <strong>&#64;if:</strong> Renders content based on conditions.
        </div>
        <div class="control-group">
          <button (click)="toggleVisibility()">Toggle Visibility</button>
          @if (isVisible) {
            <div class="result-box">Content is visible!</div>
          } @else {
            <div class="result-box">Content is hidden!</div>
          }
        </div>
      </section>

      <section class="example-card">
        <h3>&#64;for Loop</h3>
        <div class="alert alert-info">
          <strong>&#64;for:</strong> Iterates over arrays with tracking and empty state handling.
        </div>
        <div class="control-group">
          <button (click)="addItem()">Add Item</button>
          <button (click)="removeItem()">Remove Item</button>
          @for (item of items; track item.id; let i = $index, even = $even) {
            <div class="result-box" [class.even]="even">
              Item {{ i + 1 }}: {{ item.name }}
            </div>
          } @empty {
            <div class="result-box empty">No items available</div>
          }
        </div>
      </section>

      <section class="example-card">
        <h3>&#64;switch Statement</h3>
        <div class="alert alert-info">
          <strong>&#64;switch:</strong> Conditionally renders based on multiple cases.
        </div>
        <div class="control-group">
          <select [(ngModel)]="currentStatus" class="status-select">
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="pending">Pending</option>
          </select>

          @switch (currentStatus) {
            @case ('success') {
              <div class="result-box success">Operation successful!</div>
            }
            @case ('warning') {
              <div class="result-box warning">Warning: Please check the input!</div>
            }
            @case ('error') {
              <div class="result-box error">Error: Operation failed!</div>
            }
            @default {
              <div class="result-box">Operation pending...</div>
            }
          }
        </div>
      </section>
    </div>
  `,
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isVisible = true;
  items: Array<{ id: number; name: string }> = [
    { id: 1, name: 'First Item' },
    { id: 2, name: 'Second Item' }
  ];
  currentStatus = 'pending';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  addItem() {
    const newId = this.items.length + 1;
    this.items.push({ id: newId, name: `Item ${newId}` });
  }

  removeItem() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
}
