const express = require('express')
const router = express.Router()
const Sailing = require('../models/sailing')

//Index
router.get('/', (req,res)=>{
    Sailing.find({}, (err, foundPost)=>{
        res.json(foundPost)
    })
})

//Delete
router.delete('/:id', (req,res)=>{
    Sailing.findByIdAndRemove(req.params.id, (err, deletePost)=>{
        res.json(deletePost)
    })
})

//Update
router.put('/:id', (req, res)=>{
    Sailing.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatePost)=>{
        res.json(updatePost)
    })
})


//Create
router.post('/', (req,res)=>{
    Sailing.create(req.body, (err, createdPost)=>{
        res.json(createdPost)
    })
})

//Show
router.get('/:id', (req, res)=>{
    Sailing.findById(req.params.id, (err, foundPost)=>{
        res.json(foundPost)
    })
})

module.exports = router