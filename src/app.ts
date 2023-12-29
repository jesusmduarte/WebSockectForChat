import express from 'express';
import http from 'http';
import { Server } from 'ws';
import websocketRoutes from './routes/websocketRoutes';

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });


// Inyectar WebSocket Server en las rutas
websocketRoutes(wss);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
