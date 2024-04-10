import React from "react";
import "./App.css";

//import Watersport from "./Pages/Staff/WatersportManagement";
import ManagerDashboard from "./Pages/Staff/ManagerDashboard";
import AddActivity from "./Pages/Staff/AddActivity";
import WatersportManage from "./Pages/Staff/WatersportManagement";
import AddReserv from "./Pages/Staff/addWatersportReserv";
import SelectActivity from "./Pages/Staff/SelectActivity";
import WatersportReservations from "./Pages/Staff/watersportReservations";
import ReceptionNavbar from "./components/receptionNavbar";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";

import Home from "./Pages/Home";
import Signup from "./Pages/signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PasswordReset from "./Pages/PasswordReset";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPwd";
import AdminDash from "./Pages/Staff/AdminDash";
import ManagerDash from "./Pages/Staff/ManagerDash";
import StaffDash from "./Pages/Staff/StaffDash";
import Staffmanage from "./Pages/Staff/staffManage";
import Usermanage from "./Pages/Staff/UserManage";
import AccountManage from "./Pages/Staff/AccountManage";
import InitialRedirect from "./context/initialDirect";

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
          <Route path="" element={<InitialRedirect />} />
          <Route
            path="/Dashboard"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/user/resetPassword/:token" element={<PasswordReset />}/>


          <Route path="/AdminDashbord" element={<AdminDash />} />
          <Route path="/ManagerDash" element={<ManagerDash />} />
          <Route path="/StaffDashbord" element={<StaffDash />} />
          <Route path="/Staffmanage" element={<Staffmanage />} />
          <Route path="/Usermanage" element={<Usermanage />} />
          <Route path="/Accountmanage" element={<AccountManage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
