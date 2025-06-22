"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 });
let allsockets = [];
ws.on("connection", (socket) => {
    socket.on("message", (message) => {
        var _a;
        const parsedMeassge = JSON.parse(message);
        if (parsedMeassge.type === "join") {
            allsockets.push({
                socket,
                room: parsedMeassge.payload.roomId,
            });
        }
        if (parsedMeassge.type === "chat") {
            const currentUserRoom = (_a = allsockets.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i].room == currentUserRoom) {
                    allsockets[i].socket.send(parsedMeassge.payload.message);
                }
            }
        }
    });
});
