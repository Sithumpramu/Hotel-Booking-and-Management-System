require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const watersportRoutes = require("./Routes/watersport");
const WatersportReservationRoutes = require("./Routes/WatersportReservation");
const diningReservationRoutes = require("./Routes/DiningReservation");
const hotelRoutes = require("./Routes/HotelSchema");
const userRoutes = require("./Routes/user");
const staffRoutes = require("./Routes/staff");
const tableRoutes = require("./Routes/table");
const menuRoutes = require("./Routes/menu");
const orderRoutes = require("./Routes/order");
const buffetRoutes = require("./Routes/buffet");

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

app.use("/watersport", watersportRoutes);
app.use("/watersportReservation", WatersportReservationRoutes);
app.use("/table", diningReservationRoutes);

app.use("/user", userRoutes);
app.use("/hotel", hotelRoutes);

app.use("/staff", staffRoutes);
app.use("/table", tableRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
app.use("/buffet", buffetRoutes);
// connect to db
mongoose.connect(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
