import { Component } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { JsonPipe } from '@angular/common';
  import { ResolveData } from '../../../models/resolve-data.interface';

  @Component({
    selector: 'app-resolve',
    standalone: true,
    imports: [JsonPipe],
    template: `
      <div class="example-card">
        <h3>Resolve Guard Demo</h3>
        <pre>{{ data | json }}</pre>
        <p class="explanation">{{ explanation }}</p>
      </div>
    `,
    styleUrls: ['./resolve.component.css']
  })
  export class ResolveComponent {
    data!: ResolveData;
    explanation: string = `
      El DataResolver en Angular es una característica que permite precargar datos antes de que un componente sea activado.
      Esto es útil para asegurar que los datos necesarios estén disponibles antes de que el componente se renderice,
      evitando así vistas incompletas o errores.`;

    constructor(private route: ActivatedRoute) {
      this.data = this.route.snapshot.data['resolvedData'];
    }
  }
