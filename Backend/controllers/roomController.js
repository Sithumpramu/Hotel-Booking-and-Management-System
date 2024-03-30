//Add a room
const room = async (req, res) => {
    const {Rname,Rtype,Max,status,Price} = req.body
  
    try {
      const rooms = await room.room(Rname,Rtype,Max,status,Price)
  
      
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  module.exports={room}  