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
import Watersport from './Pages/Staff/WatersportManagement';
import ManagerDashboard from './Pages/Staff/ManagerDashboard';
import AddActivity from './Pages/Staff/AddActivity';
import WatersportManage from "./Pages/Staff/WatersportManagement";
import AddReserv from "./Pages/Staff/addWatersportReserv";


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
            path="/watersport"
            element={<Watersport />}
          />
          <Route
            path="/ManagerDashboard"
            element={<ManagerDashboard />}
          />
          <Route
            path="/AddActivity"
            element={<AddActivity />}
          />
          <Route
            path="/WatersportsManagement"
            element={<WatersportManage />}
          />
          <Route
            path="/WatersportsReservation"
            element={<AddReserv />} 
          />
                 
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
