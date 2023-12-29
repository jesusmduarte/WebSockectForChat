# My WebSocket Server

This project is a TypeScript Express Node server for WebSocket communication.

## Installation

To install the necessary dependencies, run the following command in your terminal:

```
npm install
```

## Running the Server

To start the server, run the following command:

```
npm start
```

This will compile the TypeScript files and start the server.

## Usage

Once the server is running, it will listen for WebSocket connections. The server can handle different types of WebSocket messages, which are processed by the controller in `src/controllers/index.ts`.

The Express application routes are set up in `src/routes/index.ts`. The WebSocket server is set up in `src/websocket/index.ts`.

## Contributing

If you want to contribute to this project, please follow the standard fork & pull request workflow.

## License

This project is licensed under the MIT License.