import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

interface Todo {
  id: number;
  name: string;
  created_at: string;
}

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="component-container">
      <h2>Database & API Connection</h2>
      <section class="example-card">
        <h3>Lista de Tareas</h3>
        <div class="input-group">
          <input type="text" [(ngModel)]="newTodo" placeholder="Nueva tarea">
          <button (click)="addTodo()">Agregar</button>
        </div>
        <div class="content-group">
          <p *ngFor="let todo of todos">{{ todo.name }}</p>
        </div>
      </section>
    </div>
  `
})
export class DatabaseComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    try {
      this.todos = await this.supabaseService.getTodos();
    } catch (e) {
      console.error('Error loading todos:', e);
    }
  }

  async addTodo() {
    if (!this.newTodo.trim()) return;
    try {
      const data = await this.supabaseService.addTodo(this.newTodo);
      this.todos.unshift(data[0]);
      this.newTodo = '';
    } catch (e) {
      console.error('Error adding todo:', e);
    }
  }
}
