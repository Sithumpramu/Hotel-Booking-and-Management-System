const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const {AddActivity, getActivity, deleteActivity,updateActivity} = require('../controllers/watersportController')




//add new activity
router.post('/add', AddActivity)

//read activities
router.get('/', getActivity)

//delete activity
router.delete('/activities/:activityName', deleteActivity);

//update activity
router.put('/activities/:activityName', updateActivity);


module.exports = router;