import * as dotenv from 'dotenv';
dotenv.config();

export const environment = {
  production: false,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
  supabasePassword: process.env.SUPABASE_PASSWORD
};
