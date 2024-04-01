import React from "react";
import './App.css';

import AddItem from "./Pages/Inventory/AddItem";
import EditItem from "./Pages/Inventory/EditItem";
import HotelView from "./Pages/Inventory/HotelView";
import RoomManagerView from "./Pages/Inventory/RoomManagerView";
import Home from './Pages/Home';
import Signup from './Pages/signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import PasswordReset from './Pages/PasswordReset'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPwd";
import AdminDash from "./Pages/Staff/AdminDash";
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
            path="/AdminDashbord"
            element={<AdminDash />}
          />
          <Route
            path="/AddItem"
            element={<AddItem />}
          />
          <Route
            path="/EditItem"
            element={<EditItem/>}
          />
          <Route
            path="/HotelView"
            element={<HotelView/>}
          />
          <Route
            path="/RoomManagerView"
            element={<RoomManagerView/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
