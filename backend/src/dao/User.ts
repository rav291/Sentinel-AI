import { supabase } from "../lib/supabaseClient";
import { User } from "../types/supabase";

export const UserDao = {
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

  async createUser(username: string, email: string, avatar_url: string | null): Promise<User> {
    const { data, error } = await supabase.from('users').insert([{ username, email, avatar_url }]).select().single();

    if (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }

    return data as User;
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
