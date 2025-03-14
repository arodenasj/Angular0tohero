import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="component-container">
      <h2>Ejemplos de Data Binding</h2>

      <div class="alert alert-info">
        El data binding en Angular nos permite sincronizar datos entre el componente
        y su template, manteniendo la vista actualizada automáticamente.
      </div>

      <section class="example-card">
        <h3>Interpolación</h3>
        <div class="alert alert-secondary">
          La interpolación {{ '{' }}{{ '{' }} permite mostrar valores del componente en el template.
          Puede contener expresiones simples y llamadas a métodos.
        </div>
        <div class="content-group">
          <p>Mensaje simple: {{ mensaje }}</p>
          <p>Expresión: {{ 2 + 2 }}</p>
          <p>Método: {{ obtenerMensaje() }}</p>
          <p>Operador ternario: {{ edad >= 18 ? 'Mayor de edad' : 'Menor de edad' }}</p>
        </div>
      </section>

      <section class="example-card">
        <h3>Property Binding</h3>
        <div class="alert alert-secondary">
          El property binding [propiedad] permite asignar valores a propiedades de elementos DOM,
          directivas o componentes. Se actualiza dinámicamente cuando cambia el valor.
        </div>
        <div class="content-group">
          <button [disabled]="botonDeshabilitado">
            Este botón está {{ botonDeshabilitado ? 'deshabilitado' : 'habilitado' }}
          </button>
          <br>
          <button (click)="toggleBoton()">Cambiar estado del botón</button>
          <div class="content-group">
            <div class="input-group">
              <input type="text"
                     [(ngModel)]="busqueda"
                     [placeholder]="placeholderTexto">
            </div>
            <div class="frameworks-grid">
              @for (framework of filtrarFrameworks(); track framework.nombre) {
                <div class="framework-card"
                     [class.selected]="framework === frameworkSeleccionado"
                     (click)="seleccionarFramework(framework)">
                  <img [src]="framework.url"
                       [alt]="framework.nombre"
                       class="framework-logo">
                  <p>{{ framework.nombre }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <section class="example-card">
        <h3>Event Binding</h3>
        <div class="alert alert-secondary">
          El event binding (evento) nos permite responder a eventos del usuario o del DOM.
          Podemos acceder al evento con $event y ejecutar métodos del componente.
        </div>
        <div class="content-group">
          <button (click)="incrementarContador()">¡Hazme click!</button>
          <p>Número de clicks: {{ contadorClicks }}</p>

          <div class="input-group">
            <input (input)="onInput($event)" [value]="textoInput"
                   placeholder="Escribe algo...">
            <p>Valor actual: {{ textoInput }}</p>
          </div>
        </div>
      </section>

      <section class="example-card">
        <h3>Two-way Binding</h3>
        <div class="alert alert-secondary">
          El two-way binding [(ngModel)] combina property binding y event binding,
          manteniendo sincronizados los datos en ambas direcciones.
        </div>
        <div class="content-group">
          <input [(ngModel)]="nombreUsuario" placeholder="Escribe tu nombre">
          <p>¡Hola, {{ nombreUsuario || 'Invitado' }}!</p>
        </div>
      </section>

      <section class="example-card">
        <h3>Attribute, Class y Style Binding</h3>
        <div class="alert alert-secondary">
          Podemos vincular atributos HTML, clases CSS y estilos inline
          usando [attr.], [class.] y [style.] respectivamente.
        </div>
        <div class="content-group">
          <div [attr.aria-label]="etiquetaAria">
            Este div tiene una etiqueta ARIA dinámica
          </div>

          <div [class.highlight]="resaltado"
               [class.text-center]="true"
               [style.color]="colorTexto"
               [style.fontSize.px]="tamanoFuente">
            Texto con estilos dinámicos
          </div>

          <button (click)="toggleResaltado()">Toggle Resaltado</button>
          <button (click)="cambiarColor()">Cambiar Color</button>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BindingComponent {
  mensaje = '¡Hola desde Angular!';
  edad = 20;
  botonDeshabilitado = false;
  contadorClicks = 0;
  frameworks = [
    {
      nombre: 'Angular',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    },
    {
      nombre: 'React',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      nombre: 'Vue',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    },
    {
      nombre: 'Svelte',
      url: 'https://svelte.dev/favicon.png'
    }
  ];
  frameworkSeleccionado = this.frameworks[0];
  placeholderTexto = 'Busca un framework...';
  busqueda = '';
  textoInput = '';
  nombreUsuario = '';
  etiquetaAria = 'Ejemplo de etiqueta ARIA dinámica';
  resaltado = false;
  colorTexto = '#172B4D';
  tamanoFuente = 16;

  filtrarFrameworks() {
    const busquedaLower = this.busqueda.toLowerCase();
    return this.frameworks.filter(framework =>
      framework.nombre.toLowerCase().includes(busquedaLower)
    );
  }

  seleccionarFramework(framework: typeof this.frameworks[0]) {
    this.frameworkSeleccionado = framework;
  }

  trackByFramework(index: number, framework: { nombre: string }) {
    return framework.nombre;
  }

  obtenerMensaje() {
    return 'Mensaje desde un método';
  }

  toggleBoton() {
    this.botonDeshabilitado = !this.botonDeshabilitado;
  }

  incrementarContador() {
    this.contadorClicks++;
  }

  onInput(event: Event) {
    this.textoInput = (event.target as HTMLInputElement).value;
  }

  toggleResaltado() {
    this.resaltado = !this.resaltado;
  }

  cambiarColor() {
    this.colorTexto = this.colorTexto === '#172B4D' ? '#0052CC' : '#172B4D';
    this.tamanoFuente = this.tamanoFuente === 16 ? 20 : 16;
  }
}
