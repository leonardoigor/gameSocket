import Player from './player';
import BG from './background';




export default class World {
    players: Player[] = []
    background = null
    objects = [];



    setPlayer(player: Player) {
        this.players.push(player)
    }
    setPlayerFromJson(player: Player) {
        this.players.push(player)
    }
    setBackground(background: BG) {
        this.background = BG
    }
}