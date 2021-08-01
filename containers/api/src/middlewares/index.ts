import { Express } from 'express'
const fs = require('fs');
import { resolve } from 'path'

const folderPath = resolve(__dirname)

export default (app: Express) => {
    fs.readdirSync(folderPath).forEach(file => {
        file = file.replace('.ts', '')
        if (file != 'index') {
            let fileImport = require(`${folderPath}/${file}.ts`)
            fileImport.default(app)

        }


    });

}