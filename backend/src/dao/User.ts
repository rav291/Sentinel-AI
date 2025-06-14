import { supabase } from '../lib/supabaseClient';
import { User } from '../types/supabase';
import bcrypt from 'bcrypt';

export const UserDao = {
  async loginUser(email: string, password: string): Promise<User> {
    const { data: user, error } = await supabase.from('users').select('*').eq('email', email).maybeSingle();

    if (error) {
      console.error('Error fetching user during login:', error);
      throw new Error('Error fetching user');
    }

    if (!user) {
      const err = new Error('Invalid email or password');
      (err as any).statusCode = 401;
      throw err;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      const err = new Error('Invalid email or password');
      (err as any).statusCode = 401;
      throw err;
    }

    const { password: _, ...safeUser } = user;
    return safeUser as User;
  },

  async getAllUsers(): Promise<User[]> {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }

    return data as User[];
  },

  async getUserById(id: string): Promise<User | null> {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();

    if (error) {
      console.error('Error fetching user:', error);
      throw new Error('Failed to fetch user');
    }

    return data as User | null;
  },

  async createUser(name: string, email: string, password: string, avatar_url?: string | null): Promise<User> {
    // Check for existing user
    const { data: existing, error: existingError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (existingError) throw new Error('Error checking existing user');
    if (existing) throw new Error('User already exists with this email');

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          avatar_url,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }

    // Hide password in response
    const { password: _, ...safeUser } = data;

    return safeUser as User;
  },

  async updateUser(id: string, username?: string, email?: string, avatar_url?: string | null): Promise<User | null> {
    const updates: { username?: string; email?: string; avatar_url?: string | null } = {};
    if (username) updates.username = username;
    if (email) updates.email = email;
    if (avatar_url) updates.avatar_url = avatar_url;

    const { data, error } = await supabase.from('users').update(updates).eq('id', id).select().single();

    if (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }

    return data as User | null;
  },

  async deleteUser(id: string): Promise<void> {
    const { error } = await supabase.from('users').delete().eq('id', id);

    if (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  },
};
