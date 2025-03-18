import { Injectable } from '@angular/core';
  import { Pool } from 'pg';
  import { HttpClient } from '@angular/common/http';
  import { environment } from '../../environments/environment';

  interface Todo {
    id: number;
    name: string;
    created_at: string;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DatabaseService {
    private dbPassword: string = environment.supabasePassword!;
    private pool!: Pool;

    constructor(private http: HttpClient) {
      this.initializePool();
    }

    private initializePool() {
      if (!environment.supabaseUrl) {
        throw new Error('SUPABASE_URL is not defined');
      }
      this.pool = new Pool({
        user: 'postgres',
        host: new URL(environment.supabaseUrl).hostname,
        database: 'postgres',
        password: this.dbPassword,
        port: 5432,
        ssl: {
          rejectUnauthorized: false
        }
      });
    }

    async query(text: string, params?: any[]) {
      const client = await this.pool.connect();
      try {
        const result = await client.query(text, params);
        return result.rows;
      } finally {
        client.release();
      }
    }

    async getTodos() {
      return this.query('SELECT * FROM todos ORDER BY created_at DESC');
    }

    async addTodo(name: string) {
      return this.query(
        'INSERT INTO todos (name) VALUES ($1) RETURNING *',
        [name]
      );
    }
  }
