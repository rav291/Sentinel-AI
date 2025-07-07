import { useState } from 'react';

export function useLLMStream() {
  const [streamedText, setStreamedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startStreaming = async (searchPrompt: string) => {
    setStreamedText('');
    setIsLoading(true);

    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: searchPrompt }),
    });
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      setIsLoading(false);
      throw new Error('No stream returned');
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed?.choices?.[0]?.delta?.content;
            if (content) setStreamedText((prev) => prev + content);
          } catch (err) {
            console.error('Chunk parse failed:', jsonStr, err);
          }
        }
      }
    }

    setIsLoading(false);
  };

  return { startStreaming, streamedText, isLoading };
}
