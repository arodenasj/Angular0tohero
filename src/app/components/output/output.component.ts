import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div class="component-container">
      <h2>Ejemplos de Outputs</h2>

      <div class="alert alert-info">
        Los outputs en Angular nos permiten enviar datos desde el componente hijo hacia el padre
        usando EventEmitter. Son ideales para la comunicación entre componentes.
      </div>

      <section class="example-card">
        <h3>Output Básico</h3>
        <div class="alert alert-secondary">
          Un output simple que emite un evento cuando se hace clic en el botón.
          El componente padre puede escuchar este evento usando (nombreEvento)="método()".
        </div>
        <div class="content-group">
          <button (click)="onClick()">Emitir Evento Simple</button>
          <div *ngIf="eventEmitted" class="alert alert-success">
            Evento 'clicked' emitido.
          </div>
        </div>
      </section>

      <section class="example-card">
        <h3>Output con Datos</h3>
        <div class="alert alert-secondary">
          Podemos enviar datos junto con el evento al componente padre.
          Útil para formularios o cuando necesitamos pasar información específica.
        </div>
        <div class="content-group">
          <input type="text" [(ngModel)]="message" placeholder="Escribe un mensaje...">
          <button (click)="onSendMessage()">Enviar Mensaje</button>
          <div *ngIf="messageSent" class="alert alert-success">
            Mensaje enviado: {{ lastMessage }}
          </div>
        </div>
      </section>

      <section class="example-card">
        <h3>Output con Múltiples Eventos</h3>
        <div class="alert alert-secondary">
          Un componente puede tener múltiples outputs para diferentes tipos de eventos.
          Cada uno puede emitir datos diferentes.
        </div>
        <div class="content-group">
          <input type="number" [(ngModel)]="counter" min="0">
          <button (click)="onIncrement()">Incrementar</button>
          <button (click)="onDecrement()">Decrementar</button>
          <div *ngIf="counterChanged" class="alert alert-success">
            Contador actualizado: {{ currentCounter }}
          </div>
        </div>
      </section>

      <section class="example-card">
        <h3>Output con Validación</h3>
        <div class="alert alert-secondary">
          Podemos validar los datos antes de emitirlos al componente padre.
          Esto asegura que solo se emitan datos válidos.
        </div>
        <div class="content-group">
          <input type="number" [(ngModel)]="value" placeholder="Ingresa un número">
          <button (click)="onValidateAndEmit()">Validar y Emitir</button>
          <div *ngIf="validNumberEmitted" class="alert alert-success">
            Número válido emitido: {{ lastValidNumber }}
          </div>
          <div *ngIf="invalidNumber" class="alert alert-danger">
            Número inválido. Debe ser mayor que 0.
          </div>
        </div>
      </section>
    </div>
  `
})
export class OutputComponent {
  @Output() clicked = new EventEmitter<void>();
  @Output() messageEvent = new EventEmitter<string>();
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();
  @Output() validNumber = new EventEmitter<number>();

  message = '';
  counter = 0;
  value = 0;

  eventEmitted = false;
  messageSent = false;
  lastMessage = '';
  counterChanged = false;
  currentCounter = 0;
  validNumberEmitted = false;
  lastValidNumber = 0;
  invalidNumber = false;

  onClick() {
    this.clicked.emit();
    this.eventEmitted = true;
    setTimeout(() => this.eventEmitted = false, 2000);
  }

  onSendMessage() {
    if (this.message.trim()) {
      this.messageEvent.emit(this.message);
      this.lastMessage = this.message;
      this.message = '';
      this.messageSent = true;
      setTimeout(() => this.messageSent = false, 2000);
    }
  }

  onIncrement() {
    this.counter++;
    this.increment.emit(this.counter);
    this.currentCounter = this.counter;
    this.counterChanged = true;
    setTimeout(() => this.counterChanged = false, 2000);
  }

  onDecrement() {
    this.counter--;
    this.decrement.emit(this.counter);
    this.currentCounter = this.counter;
    this.counterChanged = true;
    setTimeout(() => this.counterChanged = false, 2000);
  }

  onValidateAndEmit() {
    if (this.value > 0) {
      this.validNumber.emit(this.value);
      this.lastValidNumber = this.value;
      this.value = 0;
      this.validNumberEmitted = true;
      this.invalidNumber = false;
      setTimeout(() => this.validNumberEmitted = false, 2000);
    } else {
      this.invalidNumber = true;
      setTimeout(() => this.invalidNumber = false, 2000);
    }
  }
}
