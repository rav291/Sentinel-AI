import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MISTRAL_SMALL_3_2_24B_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Sentinel AI',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-small-3.2-24b-instruct-2506:free',
        messages: [
          { role: 'system', content: 'You are a thoughtful and emotionally perceptive human' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 512,
        stream: true,
      }),
    });

    // Setup headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const reader = openRouterRes.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      res.status(500).end('No reader found.');
      return;
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const rawChunk = decoder.decode(value, { stream: true });

      // Optional: strip 'data: ' if present in chunk from upstream
      const lines = rawChunk.split('\n').filter((line) => line.trim().startsWith('data: '));

      for (const line of lines) {
        const payload = line.replace(/^data:\s*/, '');
        if (payload === '[DONE]') {
          res.write(`data: [DONE]\n\n`);
          continue;
        }

        // send it forward as SSE to frontend
        res.write(`data: ${payload}\n\n`);
        if ((res as any).flush) (res as any).flush();
      }
    }

    res.end();
  } catch (err) {
    console.error('Streaming error:', err);
    res.status(500).json({ error: 'Streaming failed.' });
  }
});

// Root Route
app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to Express Backend');
});

app.use(errorHandler);

app.listen(PORT, (): void => {
  console.log(`Server running on http://localhost:${PORT}`);
});
