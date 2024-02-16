const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const verifyToken = require('../verifyToken')
const User = require('../models/User')

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password, salt)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router