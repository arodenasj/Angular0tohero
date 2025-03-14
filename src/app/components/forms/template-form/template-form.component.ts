import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)" class="content-group">
      <div class="input-group">
        <label for="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          [(ngModel)]="user.name"
          required
          minlength="4"
          #name="ngModel"
        >
        @if (name.invalid && (name.dirty || name.touched)) {
          <small class="error">
            @if (name.errors?.['required']) {
              El nombre es requerido
            }
            @if (name.errors?.['minlength']) {
              El nombre debe tener al menos 4 caracteres
            }
          </small>
        }
      </div>

      <div class="input-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          [(ngModel)]="user.email"
          required
          email
          #email="ngModel"
        >
        @if (email.invalid && (email.dirty || email.touched)) {
          <small class="error">
            @if (email.errors?.['required']) {
              El email es requerido
            }
            @if (email.errors?.['email']) {
              Ingrese un email válido
            }
          </small>
        }
      </div>

      <button type="submit" [disabled]="!userForm.form.valid">Enviar</button>
    </form>
    @if (submitted) {
      <div class="alert alert-info">
        Form enviado con: {{ diagnostic }}
      </div>
    }
  `
})
export class TemplateFormComponent {
  user = {
    name: '',
    email: ''
  };
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form.value);
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }
}
