const router = require("express").Router();
let Watersport = require("../models/watersport");

router.route("/add").post((req,res)=>{
    const Activity = req.body.Activity;
    const Time = req.body.Time;
    const Price = req.body.Price;

    const newActivity = new Watersport({
        Activity,
        Time,
        Price
    })

    newActivity.save().then(()=>{
        res.json("Activity added")
    }).catch((err)=>{
        console.log(err);
    })

})