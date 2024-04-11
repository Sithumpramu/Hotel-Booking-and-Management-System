const express = require('express')
const mongoose = require('mongoose')
const { getAllMenuDetails, getSingleMenuItem, createMenuItem, deleteMenuItem, updateMenuItem } = require('../controllers/menuController')
const router = express.Router()


const {
    AddActivity,
    getActivity,
    deleteActivity,
    updateActivity,
} = require("../controllers/watersportController");
const upload = multer({ storage: multer.memoryStorage() });

//add new activity
router.post("/add", upload.single("Image"), AddActivity);

//get all reservations
router.get('/', getAllMenuDetails)

//get a single reservation
router.get('/:id', getSingleMenuItem)

//POST a new reservation
router.post('/', createMenuItem)

//DELETE reservation
router.delete('/:id', deleteMenuItem)

//UPDATE reservation
router.patch('/:id', updateMenuItem)


module.exports = router