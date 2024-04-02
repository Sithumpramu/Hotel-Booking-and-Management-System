const { ObjectId } = require('mongodb')
const Table= require('../Models/menuModel')
const mongoose= require('mongoose')

//get all reservations
const getAllMenuDetails = async(req,res) =>{

    const table = await Table.find({}).sort({createdAt: -1})

    res.status(200).json(table)
}


//get a single reservation 
const getSingleMenuDetail = async(req,res) =>{
    const{ id } = req.params 

    if(!mongoose.Types>ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ID!'})
    }

    const table = await Table.findById(id)

    if(!table) {
        return res.status(404).json({error: 'No Reservation Details!'})
    }

    res.status(200).json(table)
}



module.exports = {
    getAllMenuDetails,getSingleMenuDetail
}
