const express = require('express')
const verifyToken = require('../verifyToken')
const Post = require('../models/Post')
const router = express.Router()

//CREATE
router.post("/create", verifyToken, async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()

        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router