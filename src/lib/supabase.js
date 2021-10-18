import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  String(import.meta.env.VITE_SUPABASE_URL),
  String(import.meta.env.VITE_SUPABASE_ANON_KEY)
)

export const dbThread = (conversation_id) => {
  return supabase
    .from('threads')
    .select('conversation_id, username, data')
    .eq('conversation_id',conversation_id)
    .single()
}

export const saveThread = (thread) => {
  return supabase
    .from('threads')
    .insert([thread])
}

