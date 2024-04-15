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
import AddStock from './Pages/Staff/AddStock';
import KitchenInventory from "./Pages/Staff/KitchenInventory";
import AddPayment from "./Pages/addpayment";
import AddBulkStock from "./Pages/Staff/AddBulkStock";
import BulkStock from "./Pages/Staff/BulkStock";
import CombinedInventory from "./Pages/Staff/CombinedInventory";
import Dashboard from "./Pages/Staff/ManagerDashboard";
import RestaurantManager from "./Pages/Staff/RestaurantManager";

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
            path="/AddStock"
            element={<AddStock />}
          />
           <Route
            path="/KitchenInventory"
            element={<KitchenInventory />}
          />
            <Route
            path="/AddPayment"
            element={<AddPayment />}
          />
          <Route
            path="/AddBulkStock"
            element={<AddBulkStock />}
          />
           <Route
            path="/BulkStock"
            element={<BulkStock />}
          />
          <Route
            path="/CombinedInventory"
            element={<CombinedInventory />}
          />
          <Route 
            path="/ManagerDashboard" 
            element={<Dashboard />}
          />
          <Route 
            path="/RestaurantManager" 
            element={<RestaurantManager />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
