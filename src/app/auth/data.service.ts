import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ResolveData} from '../models/resolve-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<ResolveData> {
    const resolveData: ResolveData = {
      title: 'Resolve Guard Example',
      explanation: {
        what: 'El Resolve Guard es un mecanismo de Angular que pre-carga datos antes de activar una ruta',
        benefits: [
          'Asegura que los datos estén disponibles antes de mostrar el componente',
          'Evita estados de carga parcial en la vista',
          'Mejora la experiencia del usuario'
        ],
        howItWorks: [
          'Se ejecuta antes de activar la ruta',
          'Espera a que los datos se resuelvan',
          'Inyecta los datos resueltos en el componente'
        ],
        implementation: {
          step1: 'Crear un resolver service',
          step2: 'Configurar el resolver en las rutas',
          step3: 'Acceder a los datos resueltos en el componente'
        }
      },
      timestamp: new Date().toISOString(),
      loadTime: '1 segundo (simulado)'
    };

    return of(resolveData).pipe(delay(1000));
  }
}
