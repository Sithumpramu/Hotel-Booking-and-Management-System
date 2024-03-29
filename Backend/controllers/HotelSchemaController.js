const Hotel = require("../Models/Hotelschema")

const getAllDetails = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json({ hotels });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
    };

    const createDetails = async (req, res) => {
        try {
          const { name, address, description, images } = req.body;
          const hotel = await Hotel.create({ name, address, description, email, images });
          res.status(201).json({ hotel });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };

    module.exports = {getAllDetails,createDetails}