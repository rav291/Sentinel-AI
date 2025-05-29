import { supabase } from "../lib/supabaseClient";
import { Conversation } from "../models/Conversation";

export const ConversationModel = {
  async getAllConversations(userId: string): Promise<Conversation[]> {
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
      throw new Error('Failed to fetch conversations');
    }

    return data as Conversation[]; // Type assertion for safety
  },

  async getConversationById(id: string, userId: string): Promise<Conversation | null> {
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching conversation:', error);
      throw new Error('Failed to fetch conversation');
    }

    return data as Conversation | null;
  },

  async createConversation(userId: string, title: string | null): Promise<Conversation> {
    const { data, error } = await supabase
      .from('conversations')
      .insert([{ user_id: userId, title: title }])
      .select()
      .single();

    if (error) {
      console.error('Error creating conversation:', error);
      throw new Error('Failed to create conversation');
    }

    return data as Conversation;
  },

  async deleteConversation(id: string, userId: string): Promise<void> {
    const { error } = await supabase.from('conversations').delete().eq('id', id).eq('user_id', userId);

    if (error) {
      console.error('Error deleting conversation:', error);
      throw new Error('Failed to delete conversation');
    }
  },
};
