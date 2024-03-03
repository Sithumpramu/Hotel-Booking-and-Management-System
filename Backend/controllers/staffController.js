const { default: mongoose } = require('mongoose')
const Staff = require('../Models/staffModel')
const jwt = require('jsonwebtoken')
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
  }
  
  // login a user
  const loginstaff = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const staff = await Staff.login(email, password)
  
      // create a token
      const token = createToken(staff._id)
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  // signup a user
  const signupstaff = async (req, res) => {
    const {email, password,name,role} = req.body
  
    try {
      const staff = await Staff.signup(email, password,name,role)
  
      // create a token
      const token = createToken(staff._id)
  
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  
  module.exports={loginstaff,signupstaff}