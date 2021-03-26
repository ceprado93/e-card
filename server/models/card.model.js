const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cardSchema = new Schema({
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    phone: String,
    email: String,
    job: String,
    company: String,
    address: String,
    image: String,
},
    {
        timestamps: true
    })

const Card = mongoose.model("Card", cardSchema)
module.exports = Card