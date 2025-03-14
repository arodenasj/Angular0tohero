import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-event-listener',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="event-examples">
      <h2>Event Listener Examples</h2>

      <section class="example-card">
        <h3>Mouse Events</h3>
        <div class="alert alert-info">
          <strong>(click), (mouseenter), (mouseleave):</strong> Common mouse event listeners.
        </div>
        <div class="interaction-area"
             (mouseenter)="onMouseEnter()"
             (mouseleave)="onMouseLeave()"
             [class.highlight]="isHovered">
          <p>Mouse over this area</p>
          <p>Hover status: {{ isHovered ? 'Hovering' : 'Not hovering' }}</p>
          <button (click)="handleClick($event)">Click me</button>
          <p *ngIf="clickInfo">Click position: X: {{ clickInfo?.x }}, Y: {{ clickInfo?.y }}</p>
        </div>
      </section>

      <section class="example-card">
        <h3>Keyboard Events</h3>
        <div class="alert alert-info">
          <strong>(keyup), (keydown):</strong> Keyboard event listeners with filtering.
        </div>
        <input type="text"
               (keyup.enter)="onEnterKey($event)"
               (keydown)="onKeyDown($event)"
               placeholder="Type and press Enter">
        <p>Last key pressed: {{ lastKeyPressed }}</p>
        <p>Enter key value: {{ enterValue }}</p>
      </section>

      <section class="example-card">
        <h3>Form Events</h3>
        <div class="alert alert-info">
          <strong>(submit), (reset):</strong> Form event handling.
        </div>
        <form (submit)="onSubmit($event)" (reset)="onReset()">
          <input type="text" placeholder="Type something">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
        <p>Form status: {{ formStatus }}</p>
      </section>

      <section class="example-card">
        <h3>Event Propagation</h3>
        <div class="alert alert-info">
          <strong>$event.stopPropagation():</strong> Control event bubbling.
        </div>
        <div class="outer" (click)="onOuterClick()">
          Outer (click me)
          <div class="inner" (click)="onInnerClick($event)">
            Inner (click me with stopPropagation)
          </div>
        </div>
        <p>Click target: {{ clickTarget }}</p>
      </section>
    </div>
  `,
  styleUrl: './event-listener.component.css'
})
export class EventListenerComponent {
  isHovered = false;
  clickInfo: { x: number; y: number } | null = null;
  lastKeyPressed = '';
  enterValue = '';
  formStatus = '';
  clickTarget = '';

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  handleClick(event: MouseEvent) {
    this.clickInfo = {
      x: event.clientX,
      y: event.clientY
    };
  }

  onKeyDown(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
  }

  onEnterKey(event: any) {
    this.enterValue = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.formStatus = 'Form submitted';
  }

  onReset() {
    this.formStatus = 'Form reset';
  }

  onOuterClick() {
    this.clickTarget = 'Outer div clicked';
  }

  onInnerClick(event: MouseEvent) {
    event.stopPropagation();
    this.clickTarget = 'Inner div clicked';
  }
}
