import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GuardsComponent} from './guards.component';
import {LoginComponent} from './login/login.component';
import {CanActivateComponent} from './can-activate/can-activate.component';
import {CanDeactivateComponent} from './can-deactivate/can-deactivate.component';
import {CanActivateChildComponent} from './can-activate-child/can-activate-child.component';
import {ResolveComponent} from './resolve/resolve.component';
import {AuthService} from '../../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    GuardsComponent,
    LoginComponent,
    CanActivateComponent,
    CanDeactivateComponent,
    CanActivateChildComponent,
    ResolveComponent,
    RouterModule.forChild([
      {
        path: '',
        component: GuardsComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {
            path: 'canactivate',
            component: CanActivateComponent,
            canActivate: [() => inject(AuthService).isAuthenticated()]
          },
          {path: 'candeactivate', component: CanDeactivateComponent},
          {path: 'canactivatechild', component: CanActivateChildComponent},
          {path: 'resolve', component: ResolveComponent}
        ]
      }
    ])
  ]
})
export class GuardsModule {
}
