import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
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
import ManagerPanel from "./components/RoomManagerNavbar.js";
import Profile from "./Pages/Staff/Profile";
import Bookings from "./Pages/Staff/Bookings";
import AddRoom from "./Pages/Staff/AddRoom.js";
import Mybookings from "./Pages/MyBookings";
import ManageRoom from "./Pages/Staff/ManageRoom.js";
=======
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
>>>>>>> 65c25d13c88bb4d6bc68a5e70b63e727acb517ad

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
<<<<<<< HEAD
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
            path="/ManageRoom"
            element={<ManageRoom/>}
          />
=======
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
>>>>>>> 65c25d13c88bb4d6bc68a5e70b63e727acb517ad
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;