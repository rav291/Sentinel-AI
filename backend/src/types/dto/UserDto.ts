export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  avatar_url?: string;
  username: string;
  role: string;
  used_tokens?: number;
  created_at?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}
