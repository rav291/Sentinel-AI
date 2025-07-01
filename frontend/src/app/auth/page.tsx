'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useLoginMutation, useRegisterMutation } from '@/lib/query/auth'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  const loginMutation = useLoginMutation()
  const registerMutation = useRegisterMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value // optional

    if (isSignUp) {
      registerMutation.mutate(
        { name, email, password },
        {
          onSuccess: (data) => {
            console.log('Register Success:', data)
          },
          onError: (err) => {
            console.error('Register Error:', err.message)
          },
        }
      )
    } else {
      loginMutation.mutate(
        { email, password },
        {
          onSuccess: (data) => {
            console.log('Login Success:', data)
          },
          onError: (err) => {
            console.error('Login Error:', err.message)
          },
        }
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0d16] via-[#120913] to-[#0b060a] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="relative z-10 w-full max-w-md space-y-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-md shadow-lg text-center transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          {isSignUp ? 'Create an account' : (
            <div>
              <span>Welcome to <span className="text-pink-400">Sentinel AI</span></span>
            </div>
          )}
        </h1>

        <div className="text-sm text-white/60">
          {isSignUp ? (
            <span className="text-white/70 animate-[fadeInUp_1s_ease-out]">
              One step closer to conversational intelligence
            </span>
          ) : (
            <h1 className="block text-white/70 animate-[fadeInUp_1s_ease-in-out]">
              Sign in below
              <span className="block">(we'll increase your message limits)</span>
            </h1>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-white/80 mb-1">
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="bg-white/10 border-none mt-3 text-white placeholder:text-pink-300 focus:ring-pink-400 transition-all"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-white/80 mb-1">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="bg-white/10 border-none mt-3 text-white placeholder:text-pink-300 focus:ring-pink-400 transition-all"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white/80 mb-1">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-white/10 border-none mt-3 text-white placeholder:text-pink-300 focus:ring-pink-400 transition-all"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white transition-all duration-200"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <p className="text-sm text-white/60 mt-4">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-white hover:underline hover:text-pink-400 transition"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Create one'}
          </button>
        </p>

        <p className="text-xs text-white/40 mt-6">
          By continuing, you agree to our{' '}
          <span className="underline text-white/70 hover:text-white">Terms of Service</span> and{' '}
          <span className="underline text-white/70 hover:text-white">Privacy Policy</span>.
        </p>
      </div>
      {/* Animated Orbs - Converging from Corners */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left Orb */}
        <div
          className="absolute w-[300px] h-[300px] bg-pink-400 opacity-[0.48] blur-[160px] rounded-full"
          style={{
            top: '-100px',
            left: '-100px',
            animation: 'converge-top-left 10s ease-in-out infinite',
          }}
        />

        {/* Top Right Orb */}
        <div
          className="absolute w-[300px] h-[300px] bg-purple-500 opacity-[0.48] blur-[160px] rounded-full"
          style={{
            top: '-100px',
            right: '-100px',
            animation: 'converge-top-right 10s ease-in-out infinite',
          }}
        />

        {/* Bottom Left Orb */}
        <div
          className="absolute w-[300px] h-[300px] bg-blue-400 opacity-[0.48] blur-[160px] rounded-full"
          style={{
            bottom: '-100px',
            left: '-100px',
            animation: 'converge-bottom-left 10s ease-in-out infinite',
          }}
        />

        {/* Bottom Right Orb */}
        <div
          className="absolute w-[300px] h-[300px] bg-rose-400 opacity-[0.48] blur-[160px] rounded-full"
          style={{
            bottom: '-100px',
            right: '-100px',
            animation: 'converge-bottom-right 10s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  )
}

