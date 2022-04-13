const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
})

const PostsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: { type: String, required: true},
    image: {type: String},
    reply: [replySchema]
})

const Posts = mongoose.model('Posts', PostsSchema)
module.exports = Posts