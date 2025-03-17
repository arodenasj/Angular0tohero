import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  imports: [JsonPipe],
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent {
  data: any;
  explanation: string = `
    El DataResolver en Angular es una característica que permite precargar datos antes de que un componente sea activado.
    Esto es útil para asegurar que los datos necesarios estén disponibles antes de que el componente se renderice,
    evitando así vistas incompletas o errores.

    Cómo funciona:
    1.  Se define un servicio (DataResolverService) que contiene la lógica para obtener los datos.
    2.  Se crea una función resolver (dataResolver) que utiliza el servicio para obtener los datos y devuelve un Observable.
    3.  En la configuración de rutas, se añade el resolver a la ruta correspondiente, asociándolo a una clave (resolvedData).
    4.  Cuando se navega a la ruta, el resolver se ejecuta antes de que el componente se active.
    5.  Los datos resueltos se almacenan en el objeto 'data' de la ruta activada (ActivatedRoute).
    6.  El componente puede acceder a los datos resueltos a través de la clave definida en la configuración de rutas.

    Ventajas:
    - Mejora la experiencia del usuario al evitar vistas incompletas o errores.
    - Simplifica la lógica del componente al separar la obtención de datos.
    - Permite manejar respuestas asíncronas de manera más eficiente.
  `;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['resolvedData'];
  }
}
