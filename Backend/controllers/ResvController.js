const testreserv = require('../Models/Reservation')

//make a room reservation
const roomReservation = async (req, res) => {
    const { Checkindate, Checkoutdate, NoOfGuests,RoomID, Name, email, Address, phoneno ,RoomResvID} = req.body; // Correct the variable name 'status' to 'Status'

    try {

        const Reserv = await testreserv.create({
            Checkindate, Checkoutdate, NoOfGuests, RoomID,Name, email, Address, phoneno,RoomResvID
        });
        res.status(201).json(Reserv);
    } catch (error) {
        console.log(error, "error");
        res.status(400).json({ error: error.message });
    }
};

module.exports = { roomReservation }