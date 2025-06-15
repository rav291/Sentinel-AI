export interface Conversation {
  id: string; // UUID
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  title: string | null;
  user_id: string; // UUID
}