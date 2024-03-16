const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {AddActivity, getActivity, deleteActivity} = require('../controllers/watersportController')




//add new activity
router.post('/add', AddActivity)

//read activities
router.get('/', getActivity)

//delete activity
//router.delete('/delete/:Activity', deleteActivity)
router.delete('/activities/:activityName', deleteActivity);


module.exports = router;