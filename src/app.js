import express from 'express'
import routes from './routes'

class App {
    constructor() {
        this.app = express()
 
        this.midllewares();
        this.routes()
    } 

midllewares() {
    this.app.use(express.json())
}
    routes() {
        this.app.use(routes)
    }
}

export default new App().app

