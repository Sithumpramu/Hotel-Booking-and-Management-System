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
import HallList from "./Pages/staff/HallList";
import ViewHall from "./Pages/staff/ViewHall";
import EditHall from "./Pages/staff/EditHall";

import HallAdminDash from "./Pages/staff/HallAdminDash";
import AllHallList from "./Pages/staff/AllHalls";
import HallReservationForm from "./Pages/staff/HallReservationForm";
import HallAvailabilty from "./Pages/HallAvailabilty";
import BookHall from "./Pages/BookHall";
import HallResources from "./Pages/staff/HallResources";

import AdminBookHall from "./Pages/staff/AllHallRes";



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
            path="/halls"
            element={<HallList />}
          />
          <Route
            path="/ViewHall/:id"
            element={<ViewHall />}s
          />
           <Route
            path="/EditHall/:id"
            element={<EditHall />}
          />
          
            <Route
            path="/HallAdminDash"
            element={<HallAdminDash />}
          />
         <Route
            path="/AllHalls"
            element={<AllHallList/>}
          />
            <Route
            path="/AllHalls"
            element={<AllHallList/>}
          />
          <Route
            path="/AddHall/:id"
            element={<HallReservationForm/>}
          />
          <Route
            path="/availability"
            element={<HallAvailabilty/>}
          />
             <Route
            path="/bookHall"
            element={<BookHall/>}
          />
           <Route
            path="/HallResource"
            element={<HallResources/>}
          />
           <Route
            path="/AllReservations"
            element={<AdminBookHall/>}
          />
          
          
         
      
          
         
          
         
        
        
        
        
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
