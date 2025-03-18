import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="component-container">
      <h2>Database & API Connection</h2>

      <div class="alert alert-info">
        Este componente demuestra la conexión con Supabase para operaciones CRUD básicas.
      </div>

      <section class="example-card">
        <h3>Lista de Tareas</h3>
        <div class="input-group">
          <input type="text" [(ngModel)]="newTodo" placeholder="Nueva tarea">
          <button (click)="addTodo()">Agregar</button>
        </div>

        <div class="content-group">
          <p *ngFor="let todo of todos">{{ todo.title }}</p>
        </div>
      </section>

      <section class="example-card">
        <h3>Estado de la Conexión</h3>
        <div class="alert" [class.alert-info]="!error" [class.alert-secondary]="error">
          {{ error || 'Conexión establecida correctamente' }}
        </div>
      </section>
    </div>
  `
})
export class DatabaseComponent implements OnInit {
  todos: any[] = [];
  newTodo: string = '';
  error: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    try {
      this.todos = await this.supabaseService.getTodos();
    } catch (e) {
      this.error = 'Error al cargar los datos';
    }
  }

  async addTodo() {
    if (!this.newTodo.trim()) return;

    try {
      const data = await this.supabaseService.addTodo(this.newTodo);
      this.todos.push(data[0]);
      this.newTodo = '';
    } catch (e) {
      this.error = 'Error al agregar la tarea';
    }
  }
}
