import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CanComponentDeactivate} from './can-deactivate.guard';

@Component({
  selector: 'app-can-deactivate',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="example-card">
      <h3>CanDeactivate Guard Demo</h3>
      <div class="form-container">
        <div class="input-group">
          <label for="text">Texto:</label>
          <input
            type="text"
            id="text"
            [(ngModel)]="text"
            (ngModelChange)="onChange()"
            placeholder="Escribe algo...">
        </div>

        @if (hasChanges) {
          <div class="alert alert-info">
            <p>Hay cambios sin guardar. Si intentas salir, se te pedirá confirmación.</p>
          </div>
        }

        <div class="button-group">
          <button (click)="saveChanges()">Guardar Cambios</button>
          <button (click)="resetChanges()">Resetear</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './can-deactivate.component.css'
})
export class CanDeactivateComponent implements CanComponentDeactivate {
  text = '';
  hasChanges = false;
  private originalText = '';

  onChange() {
    this.hasChanges = this.text !== this.originalText;
  }

  saveChanges() {
    this.originalText = this.text;
    this.hasChanges = false;
  }

  resetChanges() {
    this.text = this.originalText;
    this.hasChanges = false;
  }

  canDeactivate(): boolean | Promise<boolean> {
    if (!this.hasChanges) {
      return true;
    }
    return new Promise<boolean>(resolve => {
      const result = window.confirm('Hay cambios sin guardar. ¿Deseas salir de todas formas?');
      resolve(result);
    });
  }
}
