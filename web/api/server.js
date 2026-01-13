import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: ['https://cadinindiyari.com'], // senin domainin
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı:', socket.id)

  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı:', socket.id)
  })
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`)
})
