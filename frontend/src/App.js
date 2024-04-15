import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//client side pages
import Home from "./Pages/Home";
import Signup from "./Pages/signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PasswordReset from "./Pages/PasswordReset";
import ForgotPassword from "./Pages/ForgotPwd";
import AddStock from './Pages/Staff/AddStock';
import KitchenInventory from "./Pages/Staff/KitchenInventory";
import AddPayment from "./Pages/addpayment";
import AddBulkStock from "./Pages/Staff/AddBulkStock";
import BulkStock from "./Pages/Staff/BulkStock";
import CombinedInventory from "./Pages/Staff/CombinedInventory";


import WatersportActivities from "./Pages/WatersportActivities";

//manager's dashboard
import Dashboard from "./Pages/Staff/ManagerDashboard";
import TableReservation from "./Pages/Staff/DiningReservations";
import ReservationNavbar from "./components/reservationNavBar";

//Event & Activity Manager
import AddActivity from "./Pages/Staff/AddActivity";
import WatersportManage from "./Pages/Staff/WatersportManagement";

//Reception handling
import AddReserv from "./Pages/Staff/addWatersportReserv";
import SelectActivity from "./Pages/Staff/SelectActivity";
import WatersportReservations from "./Pages/Staff/watersportReservations";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";

//User management
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
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPwd" element={<ForgotPassword />} />
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
          
          
          <Route path="/Watersports" element={<WatersportActivities />} />

          <Route path="/ManagerDashboard" element={<Dashboard />} />
          <Route path="/reservationNavbar" element={<ReservationNavbar />} />

          <Route path="/AddActivity" element={<AddActivity />} />
          <Route path="/WatersportsManagement" element={<WatersportManage />} />
          <Route path="/addWatersportsReservation" element={<AddReserv />} />
          <Route path="/selectActivity" element={<SelectActivity />} />
          <Route
            path="/watersportReservations"
            element={<WatersportReservations />}
          />
          <Route path="/DiningReservations" element={<TableReservation />} />

          <Route path="/ReceptionDashboard" element={<ReceptionDashboard />} />
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