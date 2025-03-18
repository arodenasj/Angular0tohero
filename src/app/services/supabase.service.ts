import { Injectable } from '@angular/core';
    import { createClient, SupabaseClient } from '@supabase/supabase-js';
    import { environment } from '../../environments/environment';

    interface Todo {
      id: number;
      name: string;
      created_at: string;
    }

    @Injectable({
      providedIn: 'root'
    })
    export class SupabaseService {
      private supabase: SupabaseClient;

      constructor() {
        if (!environment.supabaseUrl || !environment.supabaseKey) {
          throw new Error('Supabase URL or Key is not defined');
        }
        this.supabase = createClient(
          environment.supabaseUrl,
          environment.supabaseKey
        );
      }

      async getTodos() {
        const { data, error } = await this.supabase
          .from('todos')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
      }

      async addTodo(name: string) {
        const { data, error } = await this.supabase
          .from('todos')
          .insert([{ name }])
          .select();
        if (error) throw error;
        return data;
      }
    }
