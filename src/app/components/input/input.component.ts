import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';

 @Component({
     selector: 'app-input',
     standalone: true,
     imports: [FormsModule],
     template: `
       <div class="component-container">
         <h2>Ejemplos de Inputs</h2>

         <div class="alert alert-info">
           Los inputs en Angular nos permiten recoger datos del usuario de diferentes formas.
           Podemos usar binding bidireccional ([(ngModel)]) o eventos para manejar los cambios.
         </div>

         <section class="example-card">
           <h3>Binding Bidireccional</h3>
           <div class="alert alert-secondary">
             El binding bidireccional con [(ngModel)] crea una sincronización automática entre
             el input y la variable del componente. Cualquier cambio en uno se refleja inmediatamente en el otro.
           </div>
           <div class="content-group">
             <input type="text" [(ngModel)]="twoWayExample" placeholder="Escribe algo...">
             <p>Valor actual: {{ twoWayExample }}</p>
           </div>
         </section>

         <section class="example-card">
           <h3>Binding de Eventos</h3>
           <div class="alert alert-secondary">
             Con (input) capturamos el evento cada vez que el usuario escribe.
             Es útil cuando necesitamos procesar o validar el valor antes de guardarlo.
             También podemos usar (change), (keyup), (blur) y otros eventos del DOM.
           </div>
           <div class="content-group">
             <input type="text" (input)="onInputChange($event)" placeholder="Escribe para ver el evento...">
             <p>Valor del evento: {{ eventExample }}</p>
           </div>
         </section>

         <section class="example-card">
           <h3>Tipos de Input</h3>
           <div class="alert alert-secondary">
             HTML5 proporciona diferentes tipos de inputs que podemos usar con ngModel.
             Cada tipo tiene sus propias validaciones y comportamientos específicos.
           </div>
           <div class="content-group">
             <div class="input-group">
               <label>Número:
                 <input type="number" [(ngModel)]="numberExample" min="0" max="100">
               </label>
               <small>Rango permitido: 0 hasta 100</small>
             </div>
             <div class="input-group">
               <label>Casilla de verificación:
                 <input type="checkbox" [(ngModel)]="checkboxExample">
               </label>
               <small>Estado actual: {{ checkboxExample ? 'Marcado' : 'Sin marcar' }}</small>
             </div>
             <div class="input-group">
               <label>Fecha:
                 <input type="date" [(ngModel)]="dateExample">
               </label>
               <small>Fecha seleccionada: {{ dateExample || 'No se ha seleccionado fecha' }}</small>
             </div>
           </div>
         </section>
       </div>
     `
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
