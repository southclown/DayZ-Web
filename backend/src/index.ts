import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface ServerStats {
  players: {
    online: number;
    max: number;
  };
  uptime: string;
  lastRestart: string;
}

// Basic route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'DayZ SAMP Server API' });
});

// Server stats route
app.get('/api/server-stats', (_req: Request, res: Response) => {
  const stats: ServerStats = {
    players: {
      online: 100,
      max: 200
    },
    uptime: "24/7",
    lastRestart: new Date().toISOString()
  };
  
  res.json(stats);
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
