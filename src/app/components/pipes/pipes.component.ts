import {Component} from '@angular/core';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe,
    CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe,
    SlicePipe, AsyncPipe
  ],
  template: `
      <div class="component-container">
        <h2>Pipes Examples</h2>

        <div class="alert alert-info">
          Los pipes son transformadores de datos que podemos usar en nuestras plantillas para modificar
          la forma en que se muestran los valores.
        </div>

        <section class="example-card">
          <h3>Text Transformation Pipes</h3>
          <div class="alert alert-secondary">
            Estos pipes transforman el texto: uppercase (mayúsculas), lowercase (minúsculas)
            y titlecase (primera letra de cada palabra en mayúscula).
          </div>
          <div class="pipe-group">
            <p>Original text: {{ text }}</p>
            <p>uppercase: {{ text | uppercase }}</p>
            <p>lowercase: {{ text | lowercase }}</p>
            <p>titlecase: {{ text | titlecase }}</p>
          </div>
        </section>

        <section class="example-card">
          <h3>Date Pipes</h3>
          <div class="alert alert-secondary">
            El pipe 'date' permite formatear fechas de diferentes maneras usando patrones predefinidos
            o personalizados. También incluimos un cálculo manual de tiempo relativo.
          </div>
          <div class="pipe-group">
            <p>Full date: {{ today | date:'fullDate' }}</p>
            <p>Short date: {{ today | date:'shortDate' }}</p>
            <p>Custom format: {{ today | date:'dd/MM/yyyy HH:mm' }}</p>
            <p>Past date (2 days ago): {{ twoDaysAgo | date }}</p>
            <p>Time ago (calculated): {{ calculateTimeAgo(twoDaysAgo) }}</p>
          </div>
        </section>

        <section class="example-card">
          <h3>Number Pipes</h3>
          <div class="alert alert-secondary">
            Transforman números en diferentes formatos: decimales, porcentajes y monedas.
            El patrón '1.0-2' significa: 1 dígito entero mínimo, 0 decimales mínimo y 2 decimales máximo.
          </div>
          <div class="pipe-group">
            <p>Number: {{ number }}</p>
            <p>Decimal: {{ number | number:'1.0-2' }}</p>
            <p>Percentage: {{ number | percent:'1.0-2' }}</p>
            <p>Currency (EUR): {{ number | currency:'EUR':'symbol':'1.0-2' }}</p>
            <p>Currency (USD): {{ number | currency:'USD':'symbol':'1.0-2' }}</p>
          </div>
        </section>

        <section class="example-card">
          <h3>Array and Object Pipes</h3>
          <div class="alert alert-secondary">
            El pipe 'slice' permite cortar arrays, mientras que 'json' convierte objetos
            en formato JSON legible.
          </div>
          <div class="pipe-group">
            <p>Original array: {{ items }}</p>
            <p>Slice (first 2): {{ items | slice:0:2 }}</p>
            <p>Object as JSON: {{ object | json }}</p>
          </div>
        </section>

        <section class="example-card">
          <h3>Async Pipe</h3>
          <div class="alert alert-secondary">
            El pipe 'async' maneja automáticamente la suscripción y cancelación de Observables.
            Aquí mostramos un Observable que emite la fecha actual cada segundo.
          </div>
          <div class="pipe-group">
            <p>Time observable: {{ time$ | async }}</p>
            <p>With formatting: {{ time$ | async | date:'medium' }}</p>
          </div>
        </section>

        <section class="example-card">
          <h3>Chaining Pipes</h3>
          <div class="alert alert-secondary">
            Los pipes pueden encadenarse para aplicar múltiples transformaciones.
            El orden de aplicación es de izquierda a derecha.
          </div>
          <div class="pipe-group">
            <p>Chained example: {{ text | uppercase | slice:0:5 }}</p>
            <p>Date + uppercase: {{ today | date:'fullDate' | uppercase }}</p>
          </div>
        </section>
      </div>
    `,
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  text = 'hello angular world';
  today = new Date();
  number = 42.99;
  items = ['apple', 'banana', 'orange', 'mango'];
  object = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );
  twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  twoDaysLater = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  calculateTimeAgo(date: Date): string {
    const now = new Date().getTime();
    const diff = now - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return `${seconds} seconds ago`;
  }
}
