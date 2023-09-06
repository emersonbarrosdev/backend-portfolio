const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/db.json');
});

app.listen(port, () => {
  console.log("O servidor está rodando na porta " + port)
});