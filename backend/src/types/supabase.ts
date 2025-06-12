// types/supabase.ts

// You can generate types directly from your database schema with Supabase CLI:
// npx supabase gen types typescript --project-id your-project-id > src/types/supabase.ts

// src/types/index.ts

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  avatar_url?: string;
  created_at: string; // ISO string
  last_login_at?: string | null;
  used_tokens?: number;
}

export interface Conversation {
  id: number;
  user_id: number;
  title?: string;
  created_at: string;
  updated_at: string;
}

export type Role = 'user' | 'assistant' | 'system';

export interface Message {
  id: number;
  conversation_id: number;
  role: Role;
  content: string;
  created_at: string;
}
