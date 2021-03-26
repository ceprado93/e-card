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

router.get('/latest', (req, res) => {
    Card.find()
        .sort('-createdAt')
        .limit(4)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Card', err }))
})

router.get('/details/:card_id', (req, res) => {
    Card.findById(req.params.card_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching Card', err }))
})

router.post('/new', (req, res) => {
    const { phone, email, job, company, address, image } = req.body,
        author = req.session.user.id

    Card.create({ phone, email, job, company, address, image, author })
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