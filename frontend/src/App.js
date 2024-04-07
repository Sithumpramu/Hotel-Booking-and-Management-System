import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Signup from "./Pages/signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PasswordReset from "./Pages/PasswordReset";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPwd";
import Watersport from "./Pages/Staff/WatersportManagement";
import ManagerDashboard from "./Pages/Staff/ManagerDashboard";
import AddActivity from "./Pages/Staff/AddActivity";
import WatersportManage from "./Pages/Staff/WatersportManagement";
import AddReserv from "./Pages/Staff/addWatersportReserv";
import SelectActivity from "./Pages/Staff/SelectActivity";
import WatersportReservations from "./Pages/Staff/watersportReservations";
import ReceptionNavbar from "./components/receptionNavbar";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";

import AdminDash from "./Pages/Staff/AdminDash";
import ManagerDash from "./Pages/Staff/ManagerDash";
import StaffDash from "./Pages/Staff/StaffDash";
import Staffmanage from "./Pages/Staff/staffManage";
import Usermanage from "./Pages/Staff/UserManage";
import AccountManage from "./Pages/Staff/AccountManage";
import InitialRedirect from "./context/initialDirect";
import Rooms from "./Pages/Rooms";
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
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPwd" element={<ForgotPassword />} />
          <Route
            path="/user/resetPassword/:token"
            element={<PasswordReset />}
          />

          <Route path="/watersport" element={<Watersport />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/AddActivity" element={<AddActivity />} />
          <Route path="/WatersportsManagement" element={<WatersportManage />} />
          <Route path="/addWatersportsReservation" element={<AddReserv />} />
          <Route path="/selectActivity" element={<SelectActivity />} />
          <Route
            path="/watersportReservations"
            element={<WatersportReservations />}
          />

          <Route path="/navBar" element={<ReceptionNavbar />} />
          <Route path="/ReceptionDashboard" element={<ReceptionDashboard />} />
          <Route path="/AdminDashbord" element={<AdminDash />} />
          <Route path="/ManagerDashbord" element={<ManagerDash />} />
          <Route path="/StaffDashbord" element={<StaffDash />} />
          <Route path="/Staffmanage" element={<Staffmanage />} />
          <Route path="/Usermanage" element={<Usermanage />} />
          <Route path="/Accountmanage" element={<AccountManage />} />
          <Route path="/Rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
