
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const staffSchema = new Schema({

    email:{
        type:String,
        require: true,
        unique:true
       
    },

    password:{
        type:String,
        require:true
    },

    name:{
        type:String,
        require:true
    },

    role:{
        type:String,
        default:'staff'
    }

});

// static signup method
staffSchema.statics.signup = async function(email, password,name,role) {

    // validation

    if (!email || !password || !name || !role) {
      throw Error('All fields must be filled')
    }

    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    }

    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }

    if (password.length < 8) {
      throw Error('Password must be at least 8 characters long');
    }

  
 
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const staff = await this.create({ email, password: hash,name,role })
  
    return staff
  }
  
  // static login method
  staffSchema.statics.login = async function(email, password) {
  
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const staff = await this.findOne({ email })
    if (!staff) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, staff.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return staff
  }


module.exports = mongoose.model('Staff', staffSchema)//create collection