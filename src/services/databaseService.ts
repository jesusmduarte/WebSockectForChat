import { Message } from '../models/messageModel';
import { createClient } from '@libsql/client';

class DatabaseService {
    // Aquí puedes implementar métodos para conectarte a la base de datos y guardar/recuperar mensajes

    constructor() {
        const dbClient = createClient({
            url:process.env.DATABASE_URL ?? '',
            authToken:process.env.DATABASE_AUTH_TOKEN ?? '',
        });
    }

    async saveMessage(message: Message): Promise<void> {
        // Implementa la lógica para guardar un mensaje en la base de datos
    }

    // Otros métodos útiles podrían ser `getMessage`, `getMessagesForUser`, etc.
}

export default new DatabaseService();