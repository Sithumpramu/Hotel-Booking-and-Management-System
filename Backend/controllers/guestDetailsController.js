const { default: mongoose } = require('mongoose')
const guestDetails = require('../Models/guestDetailsModel')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

//get all guest details
const getguestDetails = async (req,res) =>{
    const guest = await guestDetails.find({})//get all data
    res.status(200).json(guest)//send to browser
  }

//add guest details
const addguestDetails = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, country, city } = req.body;

  try {
      const newguest = new guestDetails({ firstName, lastName, email, phoneNumber, address, country, city  }); 
      await newguest.save(); // Save the new guest to the database
      res.status(201).json(newguest); // Respond with the newly created guest details
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

module.exports = {
    addguestDetails,
    getguestDetails
}