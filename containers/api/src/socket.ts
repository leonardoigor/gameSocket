import { Server } from 'socket.io'
import { Server as ServeHttp } from 'http'

export default class Socket {

    socket: Server

    socketStart(exp: ServeHttp) {
        this.socket = new Server(exp, {
            cors: {
                origin: '*',
            }
        })
    }

}