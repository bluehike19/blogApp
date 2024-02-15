const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({})

module.exports = mongoose.models("User", UserSchema)