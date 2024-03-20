const express = require('express')
const mongoose = require('mongoose')
const router=express.Router()


const Hall = require('../Models/hallModel')

const { getAllHalls, createHall ,updateHall} =require('../controllers/hallController')


router.get('/', getAllHalls);
router.post('/add', createHall);
router.put('/update/:id', updateHall);




module.exports = router