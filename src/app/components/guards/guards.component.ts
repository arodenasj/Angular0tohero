import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-guards',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="guards-container">
      <div class="guards-sidebar">
        <h2>Angular Guards</h2>
        <nav class="guards-nav">
          <a routerLink="./login" class="btn">Login Demo</a>
        </nav>

        <div class="guards-info">
          <div class="example-card">
            <h3>CanActivate Guard</h3>
            <div class="guard-content">
              <div class="guard-description">
                <p><strong>Función:</strong> Protege rutas y controla el acceso basado en condiciones.</p>
                <ul>
                  <li>Verifica si el usuario está autenticado</li>
                  <li>Comprueba permisos de usuario</li>
                  <li>Redirecciona a login si no cumple condiciones</li>
                </ul>
                <div class="code-example">
                  <code>canActivate: [() =&gt; inject(AuthService).isAuthenticated()]</code>
                </div>
              </div>
              <a routerLink="./canactivate" class="demo-btn">Ver Demostración</a>
            </div>
          </div>

          <div class="example-card">
            <h3>CanDeactivate Guard</h3>
            <div class="guard-content">
              <div class="guard-description">
                <p><strong>Función:</strong> Controla la salida de una ruta.</p>
                <ul>
                  <li>Evita pérdida de cambios no guardados</li>
                  <li>Muestra diálogo de confirmación</li>
                  <li>Valida estado de formularios</li>
                </ul>
                <div class="code-example">
                  <code>canDeactivate: [(component) =&gt; component.canExit()]</code>
                </div>
              </div>
              <a routerLink="./candeactivate" class="demo-btn">Ver Demostración</a>
            </div>
          </div>

          <div class="example-card">
            <h3>CanActivateChild Guard</h3>
            <div class="guard-content">
              <div class="guard-description">
                <p><strong>Función:</strong> Protege rutas hijas en módulos anidados.</p>
                <ul>
                  <li>Aplica seguridad a subrutas</li>
                  <li>Verifica permisos específicos</li>
                  <li>Control jerárquico de acceso</li>
                </ul>
                <div class="code-example">
                  <code>canActivateChild: [() =&gt; checkChildAccess()]</code>
                </div>
              </div>
              <a routerLink="./canactivatechild" class="demo-btn">Ver Demostración</a>
            </div>
          </div>

          <div class="example-card">
            <h3>Resolve Guard</h3>
            <div class="guard-content">
              <div class="guard-description">
                <p><strong>Función:</strong> Pre-carga datos antes de mostrar la ruta.</p>
                <ul>
                  <li>Obtiene datos necesarios</li>
                  <li>Maneja respuestas asíncronas</li>
                  <li>Previene vistas incompletas</li>
                </ul>
                <div class="code-example">
                  <code>resolve: {{ '{' }} data: () =&gt; inject(DataService).getData() {{ '}' }}</code>
                </div>
              </div>
              <a routerLink="./resolve" class="demo-btn">Ver Demostración</a>
            </div>
          </div>
        </div>
      </div>

      <div class="guards-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './guards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuardsComponent {
  constructor(public router: Router) {
  }
}
