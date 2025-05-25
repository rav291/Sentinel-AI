import express from 'express';

const router = express.Router();

router.get('/status', (_req, res) => {
  res.json({ message: 'API is working 🎯' });
});

export default router;
