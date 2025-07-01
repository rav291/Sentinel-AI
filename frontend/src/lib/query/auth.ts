import { useMutation } from '@tanstack/react-query'
import { loginUser, registerUser } from '@/lib/api/auth'
import { LoginInput, RegisterInput } from '@/types/auth'

export function useLoginMutation() {
  return useMutation({
    mutationFn: (data: LoginInput) => loginUser(data),
  })
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (data: RegisterInput) => registerUser(data),
  })
}
