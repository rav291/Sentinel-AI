// types/supabase.ts

// You can generate types directly from your database schema with Supabase CLI:
// npx supabase gen types typescript --project-id your-project-id > src/types/supabase.ts

export type User = {
  id: string
  name: string
  role: string
}
