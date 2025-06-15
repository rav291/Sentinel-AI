export interface User {
  id: string; // UUID
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  username: string;
  email: string;
  avatar_url: string | null;
}