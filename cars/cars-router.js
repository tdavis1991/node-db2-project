const express = require('express')
const db = require('../data/config')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await db('cars')

        res.json(cars)
    }catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const payload = req.body
        const [id] = await db('cars').insert(payload)
        const newCar = await db('cars').where({ id })

        res.status(201).json(newCar)
    }catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const payload = req.body

        await db('cars').where('id', req.params.id).update(payload)
        const updatedCar = await db("cars").where('id', req.params.id)

        res.json(updatedCar)
    }catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await db('cars').where("id", req.params.id).del()
        res.status(204).end()
    }catch(err) {
        next(err)
    }
})

module.exports = router