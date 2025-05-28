// types/supabase.ts

// You can generate types directly from your database schema with Supabase CLI:
// npx supabase gen types typescript --project-id your-project-id > src/types/supabase.ts

export type User = {
  id: string
  name: string
  role: string
}

// Then use it
// import { supabase } from './supabaseClient'
// import { User } from './types/supabase'

// const { data, error } = await supabase
//   .from<User>('users')
//   .select('*')

// if (error) {
//   console.error('Supabase Error:', error)
// } else {
//   console.log('Users:', data)
// }
