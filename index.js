const express = require("express")
const helmet = require("helmet")
const carsRouter = require('./cars/cars-router')

const server = express()
const port = 4000

server.use(helmet())
server.use(express.json())

server.use('/cars', carsRouter)


server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong"
    })
}) 

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})