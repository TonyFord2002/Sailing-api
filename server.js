require('dotenv').config()
const mongoURI = process.env.MONGO_URI
const mongoose = require('mongoose')
const db = mongoose.connection
const express = require ('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const app = express()

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)
    
// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//Routes
const sailingController = require('./controllers/sailing.js')
app.use('/sailing', sailingController)

//Comfirmation of port working
app.listen(PORT, ()=>{
    console.log('Making that money on port: ', PORT)
})