import { Server } from 'socket.io'
import dojoDomains from '../../lib/dojoDomains'

let rooms = {}

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    res.end()
    return
  }

  const io = new Server(res.socket.server)
  res.socket.server.io = io

  io.on('connection', (socket) => {
    socket.on('join-room', ({ room, user, domain }) => {
      if (!(room in rooms)) {
        rooms[room] = {
          connections: {
            [socket.id]: { admin: true, user, belt: '' },
          },
          domain,
          principle: Object.keys(dojoDomains[domain])[0],
          chat: [],
          votes: {},
        }
      } else {
        rooms[room].connections[socket.id] = { user, belt: '' }
      }
      socket.join(room)
      io.to(room).emit('room-data', rooms[room])
    })

    socket.on('select-belt-colour', ({ room, colour }) => {
      rooms[room].connections[socket.id].belt = colour
      io.to(room).emit('room-data', rooms[room])
    })

    socket.on('hide-cards', ({ room, hide }) => {
      io.to(room).emit('hide-from-server', hide)
    })

    socket.on('clear-cards', ({ room }) => {
      for (let id in rooms[room].connections) {
        rooms[room].connections[id].belt = ''
      }
      io.to(room).emit('room-data', rooms[room])
    })

    socket.on('update-timer', ({ room, timer }) => {
      io.to(room).emit('update-timer-from-server', timer - 1)
    })

    socket.on('leave-room', ({ room }) => {
      delete rooms[room].connections[socket.id]
      if (!Object.keys(rooms[room].connections).length) {
        delete rooms[room]
      }
      socket.leave(room)
      io.to(room).emit('room-data', rooms[room])
    })

    socket.on('chat-message', ({ room, msg }) => {
      rooms[room].chat.push({ id: socket.id, msg })
      io.to(room).emit('room-data', rooms[room])
    })

    socket.on('set-principle', ({ room, newPrinciple }) => {
      rooms[room].principle = newPrinciple
      io.to(room).emit('room-data', rooms[room])
    })
  })

  res.end()
}
