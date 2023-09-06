// const express = require('express');
// const app = express();

// const port = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/db.json');
// });

// app.listen(port, () => {
//   console.log("O servidor está rodando na porta " + port)
// });

// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
 // Add custom route here if needed
 jsonServer.rewriter({
  "/api/*": "/$1",
 })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;