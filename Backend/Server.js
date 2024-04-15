require("dotenv").config();

const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./Routes/user')
const kitchenStockRoutes = require ('./Routes/kitchenStock')
const paymentRoutes = require ('./Routes/payment')
const kitchenBulkStockRoutes = require('./Routes/kitchenBulkStock')

const watersportRoutes = require("./Routes/watersport");
const WatersportReservationRoutes = require("./Routes/WatersportReservation");

const diningReservationRoutes = require("./Routes/DiningReservation");

const hotelRoutes = require("./Routes/HotelSchema");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.use('/user', userRoutes)
app.use('/kitchenStock', kitchenStockRoutes)
app.use('/payment', paymentRoutes)
app.use('/kitchenBulkStock',kitchenBulkStockRoutes)
app.use("/watersport", watersportRoutes);
app.use("/watersportReservation", WatersportReservationRoutes);
app.use("/table", diningReservationRoutes);


app.use("/hotel", hotelRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error)
  })
  




