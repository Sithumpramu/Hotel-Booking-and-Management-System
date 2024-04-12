import React from "react";
import './App.css';

import Home from './Pages/Home';
import Signup from './Pages/signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import PasswordReset from './Pages/PasswordReset'
import {Route, Routes, BrowserRouter} from "react-router-dom";

import ForgotPassword from "./Pages/ForgotPwd";
import Room from "./Pages/rooms";
import Reservation from "./Pages/reservation";
import Details from "./Pages/CustomerDetails"
import AdminPanel from "./components/RoomManagerNavbar.js";
import Profile from "./Pages/Staff/Profile";
import Bookings from "./Pages/Staff/Bookings";
import AddRoom from "./Pages/Staff/AddRoom.js";
import Mybookings from "./Pages/MyBookings";
import UpdateDelete from "./Pages/Staff/UpdateDeleteRoom.js";

// Layout component with header and footer
const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={<Layout><Home /></Layout>}
          />
          <Route
            path="/Signup"
            element={<Layout><Signup /></Layout>}
          />
          <Route
            path="/Login"
            element={<Layout><Login /></Layout>}
          />
          <Route
            path="/ForgotPwd"
            element={<Layout><ForgotPassword /></Layout>}
          />
          <Route
            path="/user/resetPassword/:token"
            element={<PasswordReset />}
          />
          <Route
            path="/rooms"
            element={<Layout><Room/></Layout>}
          />

          <Route
            path="/reservation"
            element={<Layout><Reservation/></Layout>}
          />

           <Route
            path="/CustomerDetails"
            element={<Layout><Details/></Layout>}
          />



           <Route
            path="/Profile"
            element={<Profile/>}
          />

           <Route
            path="/Bookings"
            element={<Bookings/>}
          />

          <Route
            path="/AddRoom"
            element={<AddRoom/>}
          />

           <Route
            path="/MyBookings"
            element={<Layout><Mybookings/></Layout>}
          />

           <Route
            path="/UpdateDeleteRoom"
            element={<UpdateDelete/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
