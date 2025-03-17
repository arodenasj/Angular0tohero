import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="component-container">
      <h2>Ejemplos de Control de Flujo</h2>

      <section class="example-card">
        <h3>Condicional &#64;if</h3>
        <div class="alert alert-info">
          <strong>&#64;if:</strong> Renderiza contenido basado en condiciones.
        </div>
        <div class="control-group">
          <button (click)="toggleVisibility()">Cambiar Visibilidad</button>
          @if (isVisible) {
            <div class="result-box">¡El contenido es visible!</div>
          } @else {
            <div class="result-box">¡El contenido está oculto!</div>
          }
        </div>
      </section>

      <section class="example-card">
        <h3>Bucle &#64;for</h3>
        <div class="alert alert-info">
          <strong>&#64;for:</strong> Itera sobre arrays con seguimiento y manejo de estado vacío.
        </div>
        <div class="control-group">
          <button (click)="addItem()">Agregar Elemento</button>
          <button (click)="removeItem()">Eliminar Elemento</button>
          @for (item of items; track item.id; let i = $index, even = $even) {
            <div class="result-box" [class.even]="even">
              Elemento {{ i + 1 }}: {{ item.name }}
            </div>
          } @empty {
            <div class="result-box empty">No hay elementos disponibles</div>
          }
        </div>
      </section>

      <section class="example-card">
        <h3>Sentencia &#64;switch</h3>
        <div class="alert alert-info">
          <strong>&#64;switch:</strong> Renderiza condicionalmente según múltiples casos.
        </div>
        <div class="control-group">
          <select [(ngModel)]="currentStatus" class="status-select">
            <option value="success">Éxito</option>
            <option value="warning">Advertencia</option>
            <option value="error">Error</option>
            <option value="pending">Pendiente</option>
          </select>

          @switch (currentStatus) {
            @case ('success') {
              <div class="result-box success">¡Operación exitosa!</div>
            }
            @case ('warning') {
              <div class="result-box warning">Advertencia: ¡Por favor revisa los datos!</div>
            }
            @case ('error') {
              <div class="result-box error">Error: ¡La operación falló!</div>
            }
            @default {
              <div class="result-box">Operación pendiente...</div>
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
    {id: 1, name: 'Primer Elemento'},
    {id: 2, name: 'Segundo Elemento'}
  ];
  currentStatus = 'pending';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  addItem() {
    const newId = this.items.length + 1;
    this.items.push({id: newId, name: `Elemento ${newId}`});
  }

  removeItem() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
}
