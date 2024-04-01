const { default: mongoose } = require('mongoose')
const room = require('../Models/roomModel')


//get all rooms
const getRoom= async (req,res) =>{
  const room = await room.find({})//get all data
  res.status(200).json(room)//send to browser
}

//get single room
const getsingleRoom = async (req,res) =>{

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'invalid id'})
  }

  const room = await room.findById(id)

  if(!room){
    res.status(404).json({error: 'No such room'})
  }

  res.status(200).json(room)
}



//Add a room
const roomAdd = async (req, res) => {
  const { Rname, Rtype, capacity, status, price } = req.body; // Correct the variable name 'status' to 'Status'

  try {
      const newRoom = new room({ Rname, Rtype, capacity, status, price }); // Create a new room object
      await newRoom.save(); // Save the new room to the database
      res.status(201).json(newRoom); // Respond with the newly created room
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

//delete a room
const deleteRoom = async (req, res) => {
  const { id } = req.params; 

  if (!id) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  try {
    // Find and delete the room reservation
    const room = await room.findOneAndDelete( id );

    if (!room) {
      return res.status(404).json({ error: 'No such room' });
    }

    return res.status(200).json({ status: 'room deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

//update a room
const updateRoom = async (req, res) => {
  const { id } = req.params;
  const { Rname, Rtype, capacity, status, price} = req.body;

  try {
      // Validate if the provided ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ error: 'Invalid Room ID' });
      }

      // Check if the room exists in the database
      const room = await room.findById(id);
      if (!room) {
          return res.status(404).json({ error: 'Room not found' });
      }

      // Build the update object based on fields that have changed
      const updateFields = {};
      if (Rtype) updateFields.Rtype = Rtype;
      if (Rname) updateFields.Rname = Rname;
      if (capacity) updateFields.capacity = capacity;
      if (price) updateFields.price = price;
      if (status) updateFields.status = status;
      

      // Update the room only if at least one field has changed
      if (Object.keys(updateFields).length > 0) {
          const updatedRoom = await room.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
          res.json(updatedHall);
      } else {
          res.json({ message: 'No changes detected' });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {getRoom,getsingleRoom,roomAdd,deleteRoom,updateRoom};