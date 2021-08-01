import express from 'express'
import Socket from './socket'


class Server extends Socket {
    client: express.Express;
    _url!: string
    _port!: number
    constructor() {
        super()
    }
    createClient(port: number = 3000, url: string = "string",) {
        this.client = express()

        this._setPort(port)
        this._setUrl(url)
    }
    _setUrl(url: string) {
        this._url = url
    }
    _setPort(port: number) {
        this._port = port
    }
    _getUrl() {
        return this._url
    }
    _getPort() {
        return this._port
    }
    listen(callback = (port: number, uri: string) => { }) {
        this.client.listen(this._getPort(), this._getUrl(), () => callback(this._getPort(), this._getUrl() || "localhost"))
    }
}






export default Server