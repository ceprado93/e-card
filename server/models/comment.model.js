const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    writtenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    title: String,
    isAccepted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
