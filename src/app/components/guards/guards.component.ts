import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-guards',
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
                  <code>canActivate: [() => inject(AuthService).isAuthenticated()]</code>
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
                  <code>canDeactivate: [(component) => component.canExit()]</code>
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
                  <code>canActivateChild: [() => checkChildAccess()]</code>
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
                  <code>resolve: {{ '{' }} data: () => inject(DataService).getData() {{ '}' }}</code>
                </div>
              </div>
              <a routerLink="./resolve" class="demo-btn">Ver Demostración</a>
            </div>
          </div>

          <div class="example-card">
            <h3>Explicación de Guards</h3>
            <div class="guard-content">
              <div class="guard-description">
                <p>
                  Los Guards en Angular son una característica poderosa que te permite controlar el acceso a ciertas
                  rutas en tu aplicación.
                  Puedes usarlos para proteger rutas basadas en la autenticación del usuario, permisos específicos o
                  cualquier otra condición que necesites.
                </p>
                <p>
                  Los Guards se ejecutan antes de que se active una ruta, lo que te permite decidir si el usuario tiene
                  permiso para acceder a ella o no.
                  Si el Guard devuelve \`true\`, la ruta se activa. Si devuelve \`false\`, la ruta se cancela y el
                  usuario puede ser redirigido a otra página.
                </p>
                <p>
                  Existen varios tipos de Guards en Angular, cada uno con un propósito específico:
                </p>
                <ul>
                  <li>
                    <strong>CanActivate:</strong> Protege rutas y decide si un usuario puede acceder a ellas.
                  </li>
                  <li>
                    <strong>CanDeactivate:</strong> Decide si un usuario puede salir de una ruta, permitiendo la
                    confirmación antes de la navegación.
                  </li>
                  <li>
                    <strong>CanActivateChild:</strong> Protege rutas hijas y decide si un usuario puede acceder a ellas.
                  </li>
                  <li>
                    <strong>Resolve:</strong> Pre-carga datos antes de que se active una ruta, asegurando que los datos
                    estén disponibles cuando se cargue el componente.
                  </li>
                </ul>
              </div>
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
