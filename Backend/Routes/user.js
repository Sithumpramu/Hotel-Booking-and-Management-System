const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
// controller functions
const { loginUser, signupUser, getsingleuser, getuser, deleteuser, Updateuserpwd ,forgotpwd, resetpwd} = require('../controllers/userController')



// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//get users
router.get('/', getuser )

//get user
router.get('/:id', getsingleuser)

//delete account
router.delete('/delete/:email',deleteuser)

//update pwd
router.patch('/update/:email',Updateuserpwd)

//forgot pwd
router.post('/forgotPassword',forgotpwd)

//reset pwd
router.patch('/resetPassword/:token',resetpwd)



module.exports = router