import { Component } from '@angular/core';
              import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

              @Component({
                selector: 'app-reactive-form',
                standalone: true,
                imports: [ReactiveFormsModule],
                template: `
                  <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="content-group">
                    <div class="input-group">
                      <label for="firstName">Nombre:</label>
                      <input id="firstName" type="text" formControlName="firstName">
                      @if (profileForm.get('firstName')?.invalid &&
                      (profileForm.get('firstName')?.dirty || profileForm.get('firstName')?.touched)) {
                        <small class="error">
                          @if (profileForm.get('firstName')?.errors?.['required']) {
                            El nombre es requerido
                          }
                          @if (profileForm.get('firstName')?.errors?.['minlength']) {
                            El nombre debe tener al menos 4 caracteres
                          }
                        </small>
                      }
                    </div>

                    <div class="input-group">
                      <label for="email">Email:</label>
                      <input id="email" type="email" formControlName="email">
                      @if (profileForm.get('email')?.invalid &&
                      (profileForm.get('email')?.dirty || profileForm.get('email')?.touched)) {
                        <small class="error">
                          @if (profileForm.get('email')?.errors?.['required']) {
                            El email es requerido
                          }
                          @if (profileForm.get('email')?.errors?.['email']) {
                            Ingrese un email válido
                          }
                        </small>
                      }
                    </div>

                    <div formGroupName="address" class="input-group">
                      <h4>Dirección</h4>
                      <label for="street">Calle:</label>
                      <input id="street" type="text" formControlName="street">

                      <label for="city">Ciudad:</label>
                      <input id="city" type="text" formControlName="city">
                    </div>

                    <button type="submit" [disabled]="!profileForm.valid">Enviar</button>
                  </form>
                  @if (submitted) {
                    <div class="alert alert-info">
                      Form enviado con: {{ diagnostic }}
                    </div>
                  }
                `
              })
              export class ReactiveFormComponent {
                submitted = false;
                readonly profileForm;

                constructor(private fb: FormBuilder) {
                  this.profileForm = this.fb.group({
                    firstName: ['', [Validators.required, Validators.minLength(4)]],
                    email: ['', [Validators.required, Validators.email]],
                    address: this.fb.group({
                      street: [''],
                      city: ['']
                    })
                  });
                }

                onSubmit() {
                  this.submitted = true;
                  console.log(this.profileForm.value);
                }

                get diagnostic() {
                  return JSON.stringify(this.profileForm.value);
                }
              }
