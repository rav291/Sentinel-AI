'use client'

import React, { useState } from 'react'
import {
  Menu, X, Plus, Search,
  MoveUp,
  CircleArrowRight
} from 'lucide-react'

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }: any) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50'
  const variants: any = {
    default: 'bg-pink-900 text-white hover:bg-pink-800',
    outline: 'border border-pink-500/50 text-pink-300 hover:bg-pink-400/10',
    ghost: 'hover:bg-pink-600/10 text-white',
  }
  const sizes: any = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8 text-lg',
    icon: 'h-10 w-10'
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Input = ({ className = '', ...props }) => (
  <input
    className={`flex h-12 w-full rounded-xl border border-pink-400/30 bg-pink-100/5 px-4 py-2 text-sm placeholder:text-pink-300 text-white focus-visible:ring-2 focus-visible:ring-pink-500 backdrop-blur-md ${className}`}
    {...props}
  />
)

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const messages = [
    { role: 'user', text: 'Explain strawberry’s genetic structure.' },
    { role: 'assistant', text: 'Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.' },
    { role: 'user', text: 'Summarize that in one line.' },
    { role: 'assistant', text: 'StrawberrieStrawberries are octoploid, meaning they have eight copies of each chromosome, Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.Strawberries are octoploid, meaning they have eight copies of each chromosome, unlike humans who have two. This allows for complex hybridization.unlike humans who have two. This allows for complex hybridization.s have eight chromosome sets, making them genetically complex and versatile for hybrid growth.' }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#1a0d16] via-[#120913] to-[#0b060a] text-white relative scroll-smooth custom-scrollbar">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-[0.4] blur-[160px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-rose-600 opacity-[0.4] blur-[160px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-fuchsia-500 opacity-[0.4] blur-[160px] rounded-full bottom-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-[0.4] blur-[160px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white/5 backdrop-blur-xl z-20 transition-all duration-300 overflow-hidden ${sidebarOpen ? 'w-64 px-4 py-4' : 'w-16 px-2 py-4'
          }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-lg font-semibold transition-all duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
            T3.chat
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        {sidebarOpen ? (
          <>
            <Button className="w-full">
              New Chat
            </Button>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-4 h-4 w-4 text-pink-300" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </>
        ) : null}
      </div>

      {/* Sidebar Toggle Button */}
      {!sidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-30 bg-pink-600/70 hover:bg-pink-600/90 backdrop-blur-md"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'} px-4 pt-16`}>
        <div className="max-w-3xl mx-auto space-y-8">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4  text-sm rounded-xl ${msg.role === 'user'
                ? 'max-w-[75%] bg-pink-600/30 text-pink-100 backdrop-blur-md'
                : ' text-white backdrop-blur'
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Input Bar */}
      <div className="fixed bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="w-full max-w-2xl px-4">
          <Input placeholder="Ask me anything..." />
          <CircleArrowRight onClick={() => { }} className='absolute top-1/2 right-115 -translate-y-1/2 text-pink-300' />
        </div>
      </div>
    </div>
  )
}
