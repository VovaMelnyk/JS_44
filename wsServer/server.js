const WebSocket = require("ws");

// starts server instance on http://localhost:8080
const wss = new WebSocket.Server({ port: 8080 });

// waits for connection to be established from the client
// the callback argument ws is a unique for each client
wss.on("connection", ws => {
  // runs a callback on message event
  console.log("one more user connected");
  ws.on("message", data => {
    console.log(data);
    // sends the data to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  ws.on("close", () => {
    console.log("User exit from chat");
  });
});
