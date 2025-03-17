import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-event-listener',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="component-container">
      <h2>Ejemplos de Event Listeners</h2>

      <section class="example-card">
        <h3>Eventos del Ratón</h3>
        <div class="alert alert-info">
          <strong>(click), (mouseenter), (mouseleave):</strong> Escuchadores de eventos comunes del ratón.
        </div>
        <div class="interaction-area"
             (mouseenter)="onMouseEnter()"
             (mouseleave)="onMouseLeave()"
             [class.highlight]="isHovered">
          <p>Pasa el ratón por esta área</p>
          <p>Estado del hover: {{ isHovered ? 'Sobre el elemento' : 'Fuera del elemento' }}</p>
          <button (click)="handleClick($event)">Haz clic aquí</button>
          <p *ngIf="clickInfo">Posición del clic: X: {{ clickInfo.x }}, Y: {{ clickInfo.y }}</p>
        </div>
      </section>

      <section class="example-card">
        <h3>Eventos del Teclado</h3>
        <div class="alert alert-info">
          <strong>(keyup), (keydown):</strong> Escuchadores de eventos del teclado con filtrado.
        </div>
        <input type="text"
               (keyup.enter)="onEnterKey($event)"
               (keydown)="onKeyDown($event)"
               placeholder="Escribe y presiona Enter">
        <p>Última tecla presionada: {{ lastKeyPressed }}</p>
        <p>Valor al presionar Enter: {{ enterValue }}</p>
      </section>

      <section class="example-card">
        <h3>Eventos de Formulario</h3>
        <div class="alert alert-info">
          <strong>(submit), (reset):</strong> Manejo de eventos de formulario.
        </div>
        <form (submit)="onSubmit($event)" (reset)="onReset()">
          <input type="text" placeholder="Escribe algo">
          <button type="submit">Enviar</button>
          <button type="reset">Reiniciar</button>
        </form>
        <p>Estado del formulario: {{ formStatus }}</p>
      </section>

      <section class="example-card">
        <h3>Propagación de Eventos</h3>
        <div class="alert alert-info">
          <strong>$event.stopPropagation():</strong> Control de la propagación de eventos.
        </div>
        <div class="outer" (click)="onOuterClick()">
          Exterior (haz clic aquí)
          <div class="inner" (click)="onInnerClick($event)">
            Interior (haz clic aquí con stopPropagation)
          </div>
        </div>
        <p>Objetivo del clic: {{ clickTarget }}</p>
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
    this.formStatus = 'Formulario enviado';
  }

  onReset() {
    this.formStatus = 'Formulario reiniciado';
  }

  onOuterClick() {
    this.clickTarget = 'Clic en div exterior';
  }

  onInnerClick(event: MouseEvent) {
    event.stopPropagation();
    this.clickTarget = 'Clic en div interior';
  }
}
