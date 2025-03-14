import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="binding-examples">
      <h2>Data Binding Examples</h2>

      <section class="example-card">
        <h3>Interpolation</h3>
        <div class="alert alert-info">
          <strong>{{ '{' }}{{ '{' }}:</strong> Displays component property values in the template.
        </div>
        <p>Message: {{ message }}</p>
      </section>

      <section class="example-card">
        <h3>Property Binding</h3>
        <div class="alert alert-info">
          <strong>[property]:</strong> Sets an element property to a component property value.
        </div>
        <button [disabled]="isDisabled">This button is {{ isDisabled ? 'disabled' : 'enabled' }}</button>
        <br>
        <button (click)="toggleButton()">Toggle Button State</button>
      </section>

      <section class="example-card">
        <h3>Event Binding</h3>
        <div class="alert alert-info">
          <strong>(event):</strong> Calls a component method when an event occurs.
        </div>
        <button (click)="incrementCounter()">Click me!</button>
        <p>Click count: {{ clickCount }}</p>
      </section>

      <section class="example-card">
        <h3>Attribute Binding</h3>
        <div class="alert alert-info">
          <strong>[attr.]:</strong> Sets an element attribute to a component property value.
        </div>
        <div [attr.aria-label]="ariaLabel">
          This div has a dynamic aria-label
        </div>
      </section>

      <section class="example-card">
        <h3>Class Binding</h3>
        <div class="alert alert-info">
          <strong>[class.]:</strong> Toggles CSS classes based on component property values.
        </div>
        <div [class.highlight]="isHighlighted"
             [class.text-center]="true">
          Click to toggle highlight
          <button (click)="toggleHighlight()">Toggle Highlight</button>
        </div>
      </section>
    </div>
  `,
  styleUrl:'./binding.component.css'
})
export class BindingComponent {
  message = 'Hello from Angular!';
  isDisabled = false;
  clickCount = 0;
  ariaLabel = 'Dynamic ARIA label example';
  isHighlighted = false;

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

  incrementCounter() {
    this.clickCount++;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
