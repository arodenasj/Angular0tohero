import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import {TemplateFormComponent} from './template-form/template-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TemplateFormComponent, ReactiveFormComponent],
  template: `
    <div class="component-container">
      <h2>Formularios en Angular</h2>

      <section class="example-card">
        <h3>1. Template-driven Form</h3>
        <app-template-form />
      </section>

      <section class="example-card">
        <h3>2. Reactive Form</h3>
        <app-reactive-form />
      </section>
    </div>
  `,
  styleUrl: './forms.component.css'
})
export class FormsComponent {}
