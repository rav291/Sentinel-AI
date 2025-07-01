import { LoginInput, RegisterInput, AuthResponse } from '@/types/auth';

export async function loginUser(data: LoginInput): Promise<AuthResponse> {
  const res = await fetch('http://localhost:5000/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(data),
  });

  console.log("login_test", res);
  

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  return res.json();
}

export async function registerUser(data: RegisterInput): Promise<AuthResponse> {
  const res = await fetch('http://localhost:5000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Registration failed');
  }

  return res.json();
}
