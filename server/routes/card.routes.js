const express = require('express')
const router = express.Router()
const Card = require('../models/card.model')
const User = require('../models/user.model')
const { checkLoggedIn } = require('../middlewares')

router.get('/', (req, res) => {
    Card.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Card', err }))
})

router.get('/details/:userId', (req, res) => {
    Card.find({ Author: req.params.userId })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Card', err }))
})

router.post('/new', (req, res) => {
    console.log('-------', req.body)
    const { phone, email, job, company, address, image } = req.body
    console.log(req.session.user)
    Author = req.session.user._id

    Card.create({ phone, email, job, company, address, image, Author })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Card', err }))
})

router.put('/edit/:card_id', (req, res) => {
    Card.findByIdAndUpdate(req.params.card_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing Card', err }))
})

router.delete('/delete/:card_id', (req, res) => {
    Card.findByIdAndRemove(req.params.card_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving Card', err }))
})

module.exports = router