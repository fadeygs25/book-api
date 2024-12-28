import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import bookRoutes from './routes/bookRoutes';
import { connectDB } from './config/db';
import { initializeWebSocket } from './events/webSocket';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/books', bookRoutes);
app.use(errorHandler);

connectDB();
initializeWebSocket(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
