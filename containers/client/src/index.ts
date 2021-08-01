import express from 'express'

const app = express()
import { resolve } from 'path/posix'


app.use(express.static(resolve(__dirname, '../', 'public')))
app.use(express.static(resolve(__dirname, '../', 'dist')))






app.listen(3000, () => console.log('client is up'))