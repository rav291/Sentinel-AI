'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0d16] via-[#120913] to-[#0b060a] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Pink Glow Orb rising from bottom */}
      {/* Glow orb rising effect */}
      {/* <div className="absolute w-[800px] h-[800px] bg-pink-500 rounded-full blur-[170px] opacity-[0.3] bottom-[-300px] left-1/2 -translate-x-1/2 pointer-events-none animate-[float-up-down_4s_ease-in-out_infinite]" /> */}

      {/* Spotlight on form card */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-md space-y-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-md shadow-lg text-center transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          {isSignUp ? 'Create an account' : (
            <div>
              <span>Welcome to <span className="text-pink-400 block">Sentinel AI</span></span>
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

        <form className="space-y-4 text-left">
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
