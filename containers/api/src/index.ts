import Server from './server'
import Player from './world/player'
import World from './world/world'

const world = new World()

// world.setPlayerFromJson(Player.fromJSON({ x: 0, y: 0 }))



const server = new Server()
server.createClient(3000, null)


server.client.get('/world', (req, res) => {

    world.players.forEach(player => {
        player.setPost({ x: 20, y: 20 })
        player.setRotation(Math.random() * 100)
    })

    res.send(world)
})

server.listen((port, uri) => console.log(`running in ${uri}:${port}`))

