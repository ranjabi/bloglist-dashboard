const healthRouter = require('express').Router()
const mongoose = require('mongoose')

healthRouter.get('/', async (request, response) => {
    const isDbConnected = mongoose.connection.readyState === 1

    response.status(200).send({ message: {
        db: isDbConnected ? 'connected' : 'disconnected',
        be: 'OK'
    } })
})

module.exports = healthRouter