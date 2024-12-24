import express from 'express';
import { config } from './config/env';
import { connectDB } from './config/database';
import { bookRoutes } from './routes/book.route';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Initialize Express app
const app = express();
const server = createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// WebSocket setup
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
