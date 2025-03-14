import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-input',
    standalone: true,
    imports: [FormsModule],
    template: `
      <div class="input-examples">
        <h2>Input Examples</h2>

        <section class="example-card">
          <h3>Two-way Binding</h3>
          <div class="alert alert-info">
            <strong>[(ngModel)]:</strong> Creates a two-way data binding. Changes in the input are reflected
            in the component's property and vice versa.
          </div>
          <input type="text" [(ngModel)]="twoWayExample" placeholder="Type something...">
          <p>Value: {{ twoWayExample }}</p>
        </section>

        <section class="example-card">
          <h3>Event Binding</h3>
          <div class="alert alert-info">
            <strong>(input):</strong> One-way event binding that listens to input changes.
            The component method processes the event and updates the property manually.
          </div>
          <input type="text" (input)="onInputChange($event)" placeholder="Type to see event...">
          <p>Event Value: {{ eventExample }}</p>
        </section>

        <section class="example-card">
          <h3>Different Input Types</h3>
          <div class="alert alert-info">
            <strong>Various Inputs:</strong> Angular's ngModel works with all HTML5 input types.
            Each type provides its own validation and user interface.
          </div>
          <div class="input-group">
            <label>Number:
              <input type="number" [(ngModel)]="numberExample" min="0" max="100">
            </label>
            <small>Range: 0-100</small>
          </div>
          <div class="input-group">
            <label>Checkbox:
              <input type="checkbox" [(ngModel)]="checkboxExample">
            </label>
            <small>Boolean value: {{ checkboxExample }}</small>
          </div>
          <div class="input-group">
            <label>Date:
              <input type="date" [(ngModel)]="dateExample">
            </label>
            <small>Selected date: {{ dateExample }}</small>
          </div>
        </section>
      </div>
    `,
    styleUrl: './input.component.css'
  })
  export class InputComponent {
    twoWayExample = '';
    eventExample = '';
    numberExample = 0;
    checkboxExample = false;
    dateExample = '';

    onInputChange(event: Event) {
      this.eventExample = (event.target as HTMLInputElement).value;
    }
  }
