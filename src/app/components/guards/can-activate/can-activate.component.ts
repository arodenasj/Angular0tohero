import {ChangeDetectionStrategy, Component} from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-can-activate',
  standalone: true,
  template: `
    <div class="example-card">
      <h3>CanActivate Guard Demo</h3>
      @if (authService.isAuthenticated()) {
        <div class="alert alert-info">
          <p>¡Estás autenticado! Puedes ver este contenido protegido.</p>
        </div>
      } @else {
        <div class="alert alert-error">
          <p>Necesitas iniciar sesión para ver este contenido.</p>
        </div>
      }
    </div>
  `,
  styleUrls: ['./can-activate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanActivateComponent {
  constructor(public authService: AuthService) {}
}
