import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.status(200).json({ massage: 'Hello World!' })
})

module.exports = routes