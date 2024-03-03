const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {loginstaff,signupstaff} = require('../controllers/staffController')


router.post('/login', loginstaff)
// signup route
router.post('/signup', signupstaff)




module.exports = router