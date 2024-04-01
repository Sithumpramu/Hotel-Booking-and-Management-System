const express = require('express');
const roominventory = require('../Models/roominventoryModel');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const itemID = req.body.itemID;
    const itemName = req.body.itemName;
    const description = req.body.description;
    const unit_price = req.body.unit_price;
    const stockCount = req.body.stockCount;

    const newRoomInventory = new roominventory({
        itemID,
        itemName,
        description,
        unit_price,
        stockCount
    })

    newRoomInventory.save().then(() =>{
        res.json("New item added")
    }).catch((err) => {
        console.log(err);
    })
})


//get data
router.route("/").get((req, res) => {
    roominventory.find().then((inventory) => {
        res.json(inventory)
    }).catch((err) => {
        console.log(err)
    })
})


//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
    itemID,
    itemName,
    description,
    unit_price,
    stockCount
    } = req.body;

    const updateRoomInventory = {
        itemID,
        itemName,
        description,
        unit_price,
        stockCount
    }

    const update = await roominventory.findByIdAndUpdate(id, updateRoomInventory)
    .then(() => {
        res.status(200).send({status: "Room inventory is updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//deleting data
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await roominventory.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Inventory item deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    roominventory.findById(id).then((inventory) => {
        res.json(inventory)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 