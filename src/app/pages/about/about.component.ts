import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>Sobre Nosotros</h1>
      <p>Esta aplicación es un proyecto educativo para aprender los conceptos fundamentales de Angular.</p>
      <h2>Objetivos</h2>
      <ul>
        <li>Comprender los conceptos básicos de Angular</li>
        <li>Practicar con ejemplos reales</li>
        <li>Desarrollar aplicaciones modernas</li>
      </ul>
    </div>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {}
