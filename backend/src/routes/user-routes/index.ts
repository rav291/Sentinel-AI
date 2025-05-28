import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../../controllers/userController';

const router = Router();

// router.get('/', getAllUsers); // GET /users/
// router.get('/:id', getUserById); // GET /users/123
// router.post('/', createUser); // POST /users/

router.get('/', async (req, res) => {
  try {
    const url = 'https://openrouter.ai/api/v1/chat/completions';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `${process.env.DEEPSEEK_R1_ZERO_APIKEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-zero:free',
        messages: [
          {
            role: 'user',
            content: 'What is the one thing that you can do to make the world a better place?',
          },
        ],
        stream: false // Set true only when you're handling streaming properly
      }),
    });

    const data = await response.json();
    console.log('deepseek', data);
    res.status(200).json(data);

  } catch (error: any) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});


export default router;
