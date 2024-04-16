import React from "react";
import './App.css';

import AddItem from "./Pages/Inventory/AddItem";
import EditItem from "./Pages/Inventory/EditItem";
import HotelView from "./Pages/Inventory/HotelView";
import RoomManagerView from "./Pages/Inventory/RoomManagerView";

import Offer from "./Pages/OffersPackages/offerPackage";
// import addOffer from "./Pages/Staff/addOffer.js";

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
import Inventorysidebar from "./components/InventoryManagerSideBar";
import AddNewOffer from "./Pages/OffersPackages/addOffer";
// Layout component with header and footer
const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

const Layout2 = ({ children }) => (
  <div>
    <DiningNavbar />
    {children}
    <Footer />
  </div>
);

const Layout3 = ({ children }) => (
  <div>
    <RestaurantNavbar />
    {children}
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
          
           <Route
            path="/AllReservations"
            element={<AdminBookHall/>}
          />
            
          
             <Route
            path="/bookingdata/:id"
            element={<Layout><HallBookingData/></Layout>}
          />
          <Route path="/AdminDashbord" element={<AdminDash />} />
          <Route
            path="/DiningDashboard"
            element={
              <Layout2>
                <DiningDash />
              </Layout2>
            }
          />
          <Route
            path="/TableReservations"
            element={
              <Layout2>
                <TableReservation />
              </Layout2>
            }
          />
          <Route
            path="/AddReservations"
            element={
              <Layout2>
                <AddReservation />
              </Layout2>
            }
          />
          <Route
            path="/menu"
            element={
              <Layout3>
                <MenuItems />
              </Layout3>
            }
          />

          <Route
            path="/addMenu"
            element={
              <Layout3>
                <AddNewMenu />
              </Layout3>
            }
          />

          <Route
            path="/updateMenu"
            element={
              <Layout3>
                <UpdateMenu />
              </Layout3>
            }
          />

          <Route
            path="/displaymenu"
            element={
              <Layout2>
                <MenuByCategoryPage />
              </Layout2>
            }
          />
          <Route
            path="/displayReservations"
            element={
              <Layout2>
                <ManageTableReservation />
              </Layout2>
            }
          />
          <Route
            path="/displayOrders"
            element={
              <Layout2>
                <DisplayOrders />
              </Layout2>
            }
          />
          <Route
            path="/AddOrder"
            element={
              <Layout2>
                <AddNewOrder />
              </Layout2>
            }
          />
          <Route
            path="/DisplayBuffet"
            element={
              <Layout2>
                <DisplayBuffet />
              </Layout2>
            }
          />
          <Route path="/navBar" element={<RestaurantNavbar />} />
          <Route
            path="/AdminDashboard"
            element={
              <Layout3>
                <AdminDash />
              </Layout3>
            }
          />
          <Route path="/manageTables" element={<ManageTableReservation />} />
          <Route
            path="/manageOrders"
            element={
              <Layout3>
                <ManageOrders />
              </Layout3>
            }
          />
          <Route
            path="/manageBuffet"
            element={
              <Layout3>
                <ManageBuffet />
              </Layout3>
            }
          />
          <Route
            path="/updateBuffet"
            element={
              <Layout3>
                <UpdateBuffet />
              </Layout3>
            }
          />
          <Route
            path="/AdminDashbord"
            element={<AdminDash />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;