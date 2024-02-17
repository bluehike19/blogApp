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

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        await Post.deleteMany({postId:req.params.id})
        res.status(200).json("Post has been deleted!")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router