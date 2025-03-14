import { Component } from '@angular/core';
        import { TooltipDirective } from '../../directives/tooltip.directive';
        import { HighlightDirective } from '../../directives/highlight.directive';
        import { UnlessDirective } from '../../directives/unless.directive';
        import { ZoomDirective } from '../../directives/zoom.directive';

        @Component({
          selector: 'app-directives',
          standalone: true,
          imports: [HighlightDirective, TooltipDirective, UnlessDirective, ZoomDirective],
          template: `
            <div class="component-container">
              <h2>Directivas en Angular</h2>

              <section class="example-card">
                <h3>1. Directiva de Atributo: Highlight</h3>
                <div class="content-group">
                  <p appHighlight>
                    Pasa el mouse sobre este texto para ver el efecto highlight
                  </p>
                  <p appHighlight highlightColor="#E3FCEF">
                    Este texto tiene un color personalizado
                  </p>
                </div>
              </section>

              <section class="example-card">
                <h3>2. Directiva de Atributo: Tooltip</h3>
                <div class="content-group">
                  <button
                    appTooltip
                    tooltipText="Esta es una pista de ayuda"
                  >
                    Hover para ver tooltip
                  </button>
                </div>
              </section>

              <section class="example-card">
                <h3>3. Directiva Estructural: Unless</h3>
                <div class="content-group">
                  <button (click)="show = !show">
                    Toggle Contenido
                  </button>
                  <p *appUnless="show">
                    Este contenido se muestra cuando show es false
                  </p>
                </div>
              </section>

              <section class="example-card">
                <h3>4. Directiva de Atributo: Zoom</h3>
                <div class="content-group">
                  <img
                    appZoom
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                    alt="Angular Logo"
                    style="width: 100px; height: 100px;"
                  />
                  <div appZoom scale="1.2" style="margin-top: 1rem; padding: 1rem; background: white;">
                    Este elemento hace zoom al 120%
                  </div>
                </div>
              </section>
            </div>
          `
        })
        export class DirectivesComponent {
          show = false;
        }
