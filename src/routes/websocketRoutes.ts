import { Server } from "ws";

import webSocketController from "../controllers/webSocketController";

const websocketRoutes = (wss: Server) => {
  webSocketController(wss);
};

export default websocketRoutes;