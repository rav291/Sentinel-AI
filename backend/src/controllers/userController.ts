import { Request, Response } from 'express'
import { supabase } from '../lib/supabaseClient'

// GET /users/
export const getAllUsers = async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from('users').select('*')

  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return res.status(404).json({ error: 'User not found' })
  res.status(200).json(data)
}

// POST /users/
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])
    .select()
    .single()

  if (error) return res.status(400).json({ error: error.message })
  res.status(201).json(data)
}
