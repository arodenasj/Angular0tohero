import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PipesComponent} from './components/pipes/pipes.component';
import {InputComponent} from './components/input/input.component';
import {BindingComponent} from './components/binding/binding.component';
import {EventListenerComponent} from './components/event-listener/event-listener.component';
import {ControlFlowComponent} from './components/control-flow/control-flow.component';
import {ContentProjectionComponent} from './components/content-projection/content-projection.component';
import {DirectivesComponent} from './components/directives/directives.component';
import {FormsComponent} from './components/forms/forms.component';
import {AboutComponent} from './pages/about/about.component';
import {OutputComponent} from './components/output/output.component';
import {InterceptorsComponent} from './components/interceptors/interceptors.component';
import {GuardsComponent} from './components/guards/guards.component';
import {ErrorComponent} from './pages/error/error.component';
import {LoginComponent} from './components/guards/login/login.component';
import {CanActivateComponent} from './components/guards/can-activate/can-activate.component';
import {CanDeactivateComponent} from './components/guards/can-deactivate/can-deactivate.component';
import {CanActivateChildComponent} from './components/guards/can-activate-child/can-activate-child.component';
import {canActivateChildGuard} from './components/guards/can-activate-child/can-activate-child.guard';
import {ResolveComponent} from './components/guards/resolve/resolve.component';
import {dataResolver} from './auth/data-resolver.service';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home - Angular Concepts'},
  {path: 'pipes', component: PipesComponent, title: 'Pipes Examples - Angular Concepts'},
  {path: 'inputs', component: InputComponent, title: 'Input Examples - Angular Concepts'},
  {path: 'binding', component: BindingComponent, title: 'Binding Examples - Angular Concepts'},
  {path: 'events', component: EventListenerComponent, title: 'Event Listeners - Angular Concepts'},
  {path: 'control-flow', component: ControlFlowComponent, title: 'Control Flow - Angular Concepts'},
  {path: 'content-projection', component: ContentProjectionComponent, title: 'Content Projection - Angular Concepts'},
  {path: 'directives', component: DirectivesComponent, title: 'Directives - Angular Concepts'},
  {path: 'forms', component: FormsComponent, title: 'Forms - Angular Concepts'},
  {path: 'about', component: AboutComponent, title: 'Sobre Nosotros - Angular Concepts'},
  {path: 'outputs', component: OutputComponent, title: 'Output Examples - Angular Concepts'},
  {path: 'interceptors', component: InterceptorsComponent, title: 'Interceptors - Angular Concepts'},
  {
    path: 'guards',
    component: GuardsComponent,
    title: 'Guards - Angular Concepts',
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'canactivate', component: CanActivateComponent},
      {path: 'candeactivate', component: CanDeactivateComponent},
      {
        path: 'canactivatechild',
        component: CanActivateChildComponent,
        canActivateChild: [canActivateChildGuard]
      },
      {
        path: 'resolve',
        component: ResolveComponent,
        resolve: {
          resolvedData: dataResolver
        }
      }
    ]
  },
  {path: '**', component: ErrorComponent, title: 'Error 404 - Angular Concepts'},
];
