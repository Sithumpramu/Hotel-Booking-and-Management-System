require('dotenv').config()

const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./Routes/user')
const roominventoryRoutes = require('./Routes/roominventory')
const offerRoutes = require('./Routes/offers')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes

app.use('/user', userRoutes)
app.use('/roominventory',roominventoryRoutes)
app.use('/offer',offerRoutes)

// connect to db
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT , () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })



