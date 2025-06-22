import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}
let allsockets: User[] = [];

ws.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMeassge = JSON.parse(message as unknown as string);
    if (parsedMeassge.type === "join") {
      allsockets.push({
        socket,
        room: parsedMeassge.payload.roomId,
      });
    }
    if (parsedMeassge.type === "chat") {
      const currentUserRoom = allsockets.find((x) => x.socket == socket)?.room;
      for (let i = 0; i < allsockets.length; i++) {
        if (allsockets[i].room == currentUserRoom) {
          allsockets[i].socket.send(parsedMeassge.payload.message);
        }
      }
    }
  });
});
