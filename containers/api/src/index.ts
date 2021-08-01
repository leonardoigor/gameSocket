import Server from './server'
import Player from './world/player'
import World from './world/world'
import middleware from './middlewares/'

const world = new World()

// world.setPlayerFromJson(Player.fromJSON({ x: 0, y: 0 }))



const server = new Server()
server.createClient(3000, null)

middleware(server.getClient())

server.client.get('/world', (req, res) => {

    world.players.forEach(player => {
        player.setPost({ x: 20, y: 20 })
        player.setRotation(Math.random() * 100)
    })

    res.send(world)
})


server.socket.on('connect', socket => {


    console.log('connected', socket.id);

})

server.listen((port, uri) => console.log(`running in ${uri}:${port}`))

