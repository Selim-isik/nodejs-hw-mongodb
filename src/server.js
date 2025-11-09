import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
