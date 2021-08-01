import * as Vec2D from 'vector2d'
import Utils from '../utils/uuidv4';

export default class Player extends Utils {

    id: string
    position: Vec2D.Vector
    constructor(player) {
        super()
        if (player instanceof Player) {
            console.log('is');

        } else {
            this.position = new Vec2D.Vector(player.x, player.y)

        }

        this.setId(this.uuidv4())
    }
    setId(id: string) {

        this.id = id
    }

    setRotation(rotation: number) {
        this.position.rotate(rotation)
    }

    setPost(pos: { x: number, y: number }) {

        this.position = new Vec2D.Vector(pos.x, pos.y)

    }
    static fromJSON(obj) {

        return new Player(obj)
    }
}