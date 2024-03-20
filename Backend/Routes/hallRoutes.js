const express = require('express')

const router=express.Router()


const Hall = require('../Models/hallModel')

const { getAllHalls, createHall } =require('../controllers/hallController')


router.get('/', getAllHalls);
router.post('/', createHall);




module.exports = router