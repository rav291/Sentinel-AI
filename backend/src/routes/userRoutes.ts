import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

export default router;

// router.get('/', async (req, res) => {
//   try {
//     const url = 'https://openrouter.ai/api/v1/chat/completions';

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `${process.env.DEEPSEEK_R1_ZERO_APIKEY}`,
//         'Content-Type': 'application/json',
//       },
      // body: JSON.stringify({
      //   model: 'deepseek/deepseek-r1-zero:free',
      //   messages: [
      //     {
      //       role: 'user',
      //       content: 'What is the one thing that you can do to make the world a better place?',
      //     },
      //   ],
      //   stream: false, // Set true only when you're handling streaming properly
      // }),
//     });

//     const data = await response.json();
//     console.log('deepseek', data);
//     res.status(200).json(data);
//   } catch (error: any) {
//     console.error('Error:', error);
//     res.status(500).json({ error: error.message });
//   }
// });
