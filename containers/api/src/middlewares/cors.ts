import { Express } from 'express'
import cors from 'cors'

const Cors = (app: Express) => {

    app.use(cors())

}

export default Cors