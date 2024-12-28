// src/events/webSocket.ts
import { Server } from 'socket.io';

export const initializeWebSocket = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        console.log('WebSocket client connected');

        socket.on('disconnect', () => {
            console.log('WebSocket client disconnected');
        });
    });

    return io;
};
