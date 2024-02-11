const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const chalk = require('chalk');
const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let numUsuariosConectados = 0;
io.on('connection', (socket) => {
  numUsuariosConectados++;
  console.log(chalk.green(`Usuario conectado: ${socket.id}`));
  actualizarTotalUsuarios();
  socket.on('disconnect', () => {
    numUsuariosConectados--;
    console.log(chalk.red(`Usuario desconectado: ${socket.id}`));
    actualizarTotalUsuarios();
  });
});

function actualizarTotalUsuarios() {
  console.log(chalk.bgBlack.white(`Total de usuarios conectados: ${numUsuariosConectados}`));
}
const PORT = 5000;
server.listen(PORT, () => {
  console.log(chalk.keyword('orange')(`Servidor corriendo en el puerto ${PORT}`));
});
