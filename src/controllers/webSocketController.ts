import WebSocket, {Server} from 'ws';
import dbService  from '../services/databaseService';


const websocketController = (wss: Server) => {
    wss.on('connection', (ws: WebSocket) => {
        ws.on('message', (message: string) => {
            console.log('Received:', message);
            ws.send(`Echo: ${message}`);
        });
    });
};

export default websocketController;
