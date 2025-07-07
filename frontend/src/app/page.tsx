'use client';

import React, { useEffect, useState } from 'react';
import { Menu, CircleArrowRight } from 'lucide-react';
import { useLLMStream } from '@/hooks/useLLMStream';
import { Textarea } from '@/components/ui/textarea';
import svgSheet from '@/svgsheet';

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }: any) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50';
  const variants: any = {
    default: 'bg-pink-900 text-white hover:bg-pink-800',
    outline: 'border border-pink-500/50 text-pink-300 hover:bg-pink-400/10',
    ghost: 'hover:bg-pink-600/10 text-white',
  };
  const sizes: any = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8 text-lg',
    icon: 'h-8 w-8',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

type MessageType = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchPrompt, setSearchPrompt] = useState('');
  const [displayPrompt, setDisplayPrompt] = useState(false);
  const { startStreaming, isLoading, streamedText } = useLLMStream();

  useEffect(() => {
    if (!isLoading && streamedText) {
      setMessages((prev) => [...prev, { role: 'assistant', content: streamedText }]);
    }
  }, [isLoading, streamedText]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#140510] text-white">
      {/* Glowing floating blob */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] -z-10" />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#13000f] border-r border-pink-900/30 text-white flex flex-col justify-between z-30 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">T3.chat</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-pink-300 hover:text-white p-1 rounded hover:bg-pink-700/20"
            >
              {svgSheet.sidebarCollapse}
            </button>
          </div>

          {/* New Chat */}
          <button className="w-full bg-gradient-to-r from-[#7a1942] to-[#7a1942] text-white text-sm font-semibold rounded-lg py-2 mb-4 border border-pink-500/40 shadow hover:from-pink-800 hover:to-pink-800 transition">
            New Chat
          </button>

          {/* Search Input */}
          <div className="flex items-center bg-white/5 rounded-md px-3 py-2 mb-3 border border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white/50 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111 3a7.5 7.5 0 015.65 12.65z"
              />
            </svg>
            <input
              placeholder="Search your threads..."
              className="bg-transparent outline-none text-sm text-white/80 placeholder:text-white/40 w-full"
            />
          </div>

          {/* Sections */}
          <div className=" text-white/70">
            {/* Today */}
            <div>
              {/* <span className="uppercase text-xs text-white/30 mb-1">Today</span> */}
              <div className="bg-white/10 rounded px-3 py-2 mt-5 text-white text-sm cursor-pointer hover:bg-white/20">
                Rs in strawberry
              </div>
            </div>

            {/* Last 7 Days */}
            <div>
              {/* <span className="uppercase text-xs text-white/30 mt-4 mb-1">Last 7 Days</span> */}
              <div className="text-white text-sm hover:bg-white/10 px-3 py-2 rounded cursor-pointer">
                Meaning of Life Inquiry
              </div>
            </div>

            {/* Last 30 Days */}
            <div>
              {/* <span className="uppercase text-xs text-white/30 mt-4 mb-1">Last 30 Days</span> */}
              {['Next.js Tailwind CSS dark mo...', 'SQL Query for Average Popu...', 'SQL Commands Beginner to ...'].map(
                (item, i) => (
                  <div
                    key={i}
                    className="text-white text-sm hover:bg-white/10 px-3 py-2 rounded cursor-pointer truncate"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            {/* Older */}
            <div>
              {/* <span className="uppercase text-xs text-pink-500 mt-4 mb-1">Older</span> */}
              {[
                'Greeting',
                'Convert Express app to Type...',
                'Recover deleted folder in Git...',
                'MERN Stack App for Storing ...',
                'Existential crisis and feeling l...',
              ].map((item, i) => (
                <div key={i} className="text-white text-sm hover:bg-white/10 px-3 py-2 rounded cursor-pointer truncate">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - User */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/00000000?v=4"
              alt="Profile"
              className="w-9 h-9 rounded-full border border-white/10"
            />
            <div className="flex flex-col">
              <p className="text-xs text-white font-medium leading-tight">Ravi Anand</p>
              <p className="text-xs text-white/50">Free</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button onClick={() => setSidebarOpen(true)} className="text-pink-300 p-1 m-4 hover:bg-pink-700/30 rounded-md">
        {svgSheet.sidebarCollapse}
      </button>

      {/* Main Area */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} px-4`}>
        <div className="max-w-3xl no-scrollbar mx-auto h-[calc(100vh-10rem)] overflow-y-auto space-y-8 pr-2 pb-16 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mt-4 p-4 rounded-xl text-sm text-justify backdrop-blur-md ${
                msg?.role === 'user'
                  ? 'ml-auto max-w-[80%] w-fit bg-pink-700/20 text-pink-100'
                  : 'mr-auto w-full bg-white/10 text-white text-left'
              }`}
            >
              {msg?.content}
            </div>
          ))}
        </div>
      </main>

      {/* Input Section */}
      <div className="fixed bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className={`w-full max-w-2xl px-4 relative transition-all ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <Textarea
            value={searchPrompt}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSearchPrompt(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full bg-pink-100/5 text-white text-justify border border-pink-400/30 rounded-xl pr-16 py-3 placeholder:text-pink-300 backdrop-blur-md"
          />
          <CircleArrowRight
            onClick={() => {
              if (isLoading || !searchPrompt.trim()) return;
              setDisplayPrompt(true);
              setMessages((prev) => [...prev, { role: 'user', content: searchPrompt }]);
              startStreaming(searchPrompt);
              setSearchPrompt('');
            }}
            className="absolute top-1/2 w-fit no-scrollbar right-8 -translate-y-1/2 text-pink-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
