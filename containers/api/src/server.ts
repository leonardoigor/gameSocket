import express from 'express'
import Socket from './socket'
import http from 'http'









class Server extends Socket {
    client: express.Express;
    _url!: string
    _port!: number
    _server: http.Server
    constructor() {
        super()
    }
    createClient(port: number = 3000, url: string = "string",) {
        this.client = express()
        this.socketStart(this.getServer())
        this._setPort(port)
        this._setUrl(url)
    }
    getClient() {
        return this.client
    }
    getServer() {
        return this._server
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
        this.getClient().listen(this._getPort(), this._getUrl(), () => callback(this._getPort(), this._getUrl() || "localhost"))
    }
}






export default Server