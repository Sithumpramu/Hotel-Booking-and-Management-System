const express = require('express')

const router=express.Router()


const Hall = require('../Models/hallModel')



router.get('/', async (req, res) => {
    try {
      const halls = await Hall.find();
      res.json(halls);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  })

router.post('/', async (req, res) => {
    try {
        const newHall = new Hall(req.body);
        await newHall.save();
        res.status(201).json(newHall);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

)
module.exports = router