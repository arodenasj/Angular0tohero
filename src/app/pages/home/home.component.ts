import { Component } from '@angular/core';
      import { RouterLink } from '@angular/router';

 @Component({
   selector: 'app-home',
   standalone: true,
   imports: [RouterLink],
   template: `
     <nav>
       <ul>
         <li><a routerLink="/pipes">Pipes Examples</a></li>
         <li><a routerLink="/inputs">Input Examples</a></li>
         <li><a routerLink="/binding">Binding Examples</a></li>
         <li><a routerLink="/events">Event Listeners</a></li>
         <li><a routerLink="/control-flow">Control Flow</a></li>
         <li><a routerLink="/content-projection">Content Projection</a></li>
         <li><a routerLink="/directives">Directives</a></li>
         <li><a routerLink="/forms">Forms</a></li>
         <li><a routerLink="/guards">Guards</a></li>
       </ul>
     </nav>
   `,
   styleUrl: './home.component.css'
 })
      export class HomeComponent {}
