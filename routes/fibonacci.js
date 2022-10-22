import { Router } from 'express';
const router = Router();

const fibonacci = () => {};
router.get('/', (req, res, next) => {
  const { num } = req.body;

  try {
    console.log('prueba1');

    if (num && typeof num != 'number') {
      return res
        .status(403)
        .json({ message: 'Invalid parameter, must send a number' });
    }
    console.log('prueba2');
    if (!num) {
      const response = fibonacci(20);
      return res.status(200).json([1, 2, 3, 4, 5, 6]);
    }
    console.log('');
    const response = fibonacci(num);
    console.log('prueba3');
    res.status(200).json([1, 2, 3, 4, 5, 6]);
  } catch (error) {
    res.status(403).json({ errorMessage: error });
  }
});

export default router;
