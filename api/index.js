const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//database
mongoose
.connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection success!'))
  .catch((err) => console.error('Error connecting to DB:', err))

  app.get('/',(req, res)=> {
    res.send("Hello from node API Server Updated")
  })

app.listen(5000, ()=> {
    console.log('Backend is running')
})