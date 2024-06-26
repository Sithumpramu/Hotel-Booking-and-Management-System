
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({

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

    hashtoken: {
      type: String,
      default: null
    },
    hashtokenexpires: {
      type: Date,
      default: null
    },

    role: {
      type: String,
      enum: ['user', 'admin', 'manager','staff'], 
      default: 'user', 
    },

    isAdminCreation: {
      type: Boolean,
      default: false
  }

})

// static signup method
userSchema.statics.signup = async function(email, password,name,role,isAdminCreation=false) {

    // validation

    if (!email || !password || !name) {
      throw Error('All fields must be filled')
    }

    //remove restricted words
    if (!isAdminCreation) {
    const restrictedwords = ['staff','manager','admin'];
    const containsRestrictedWord = restrictedwords.some(word => email.toLowerCase().includes(word));

    if (containsRestrictedWord) {
      throw Error('Email cannot contain restricted words.');
    }
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
  
    const user = await this.create({ email, password: hash,name,role ,isAdminCreation})
  
    return user
  }

  
  // static login method
  userSchema.statics.login = async function(email, password) {
  
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

  
  
  module.exports = mongoose.model('User', userSchema)//create collection