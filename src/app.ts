import express from 'express';
import http from 'http';
import { Server } from 'ws';
import websocketRoutes from './routes/websocketRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

// Inyectar WebSocket Server en las rutas
websocketRoutes(wss);

server.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});
