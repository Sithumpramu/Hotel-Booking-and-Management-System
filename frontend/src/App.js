import React from "react";
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Login from "./components/Login";
import ReservationNavbar from "./components/reservationNavBar";

//pages
import TableReservation from "./Pages/TableReservation";
import AddReservation from "./Pages/AddReservation";
import MenuItems from "./Pages/Staff/MenuManagement";
import AddNewMenu from "./Pages/Staff/AddMenu";
import UpdateMenu from "./Pages/Staff/UpdateMenu";
import MenuByCategoryPage from "./Pages/DisplayMenu";
import ManageTableReservation from "./Pages/Staff/TableReserManagement";
import DisplayOrders from "./Pages/DisplayFoodOrders";
import AddNewOrder from "./Pages/AddOrders";
import DisplayBuffet from "./Pages/DisplayBuffet";
import ManageOrders from "./Pages/Staff/DisplayOrders";
import ManageBuffet from "./Pages/Staff/ManageBuffets";
import UpdateBuffet from "./Pages/Staff/UpdateBuffet";
import AddBuffet from "./Pages/Staff/AddBuffet";
import WatersportActivities from "./Pages/WatersportActivities";
import Dashboard from "./Pages/Staff/ManagerDashboard";
import AddActivity from "./Pages/Staff/AddActivity";
import WatersportManage from "./Pages/Staff/WatersportManagement";
import AddReserv from "./Pages/Staff/addWatersportReserv";
import SelectActivity from "./Pages/Staff/SelectActivity";
import WatersportReservations from "./Pages/Staff/watersportReservations";
import PastWatersportReservations from "./Pages/Staff/pastWatersportReserv";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";
import Room from "./Pages/rooms";
import Reservation from "./Pages/reservation";
import Details from "./Pages/CustomerDetails"
import Profile from "./Pages/Staff/Profile";
import Bookings from "./Pages/Staff/Bookings";
import AddRoom from "./Pages/Staff/AddRoom.js";
import Mybookings from "./Pages/MyBookings";
import ManageRoom from "./Pages/Staff/ManageRoom.js";
import RoomManagerView from "./Pages/Inventory/RoomManagerView";
import Offer from "./Pages/OffersPackages/offerPackage";
import AddNewOffer from "./Pages/OffersPackages/addOffer";
// import HallList from "./Pages/staff/HallList";
// import ViewHall from "./Pages/staff/ViewHall";
// import EditHall from "./Pages/staff/EditHall";
// import HallAdminDash from "./Pages/staff/HallAdminDash";
// import AllHallList from "./Pages/staff/AllHalls";
// import HallReservationForm from "./Pages/staff/HallReservationForm";
// import HallAvailabilty from "./Pages/HallAvailabilty";
// import BookHall from "./Pages/BookHall";
// import HallResources from "./Pages/staff/HallResources";
// import AdminBookHall from "./Pages/staff/AllHallRes";
// import Bug from "./Pages/Bug";
// import HallBookingData from "./Pages/HallBookingData";
// import HallCalender from "./Pages/staff/HallCalender";
// import Alldates from "./Pages/staff/Alldates";
import EditBooking from "./Pages/EditBooking";
import AddItem from "./Pages/Inventory/AddItem";
import Home from "./Pages/Home";
import Signup from "./Pages/signup";
import PasswordReset from "./Pages/PasswordReset";
import ForgotPassword from "./Pages/ForgotPwd";
import AdminDash from "./Pages/Staff/AdminDash";
import DiningDash from "./Pages/DiningDash";;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPwd" element={<ForgotPassword />} />
          <Route path="/user/resetPassword/:token" element={<PasswordReset />} />
          <Route path="/AdminDashbord" element={<AdminDash />} />
          <Route path="/DiningDashboard" element={<DiningDash />} />
          <Route path="/TableReservations" element={<TableReservation />} />
          <Route path="/AddReservations" element={<AddReservation />} />
          <Route path="/menu" element={<MenuItems />} />
          <Route path="/addMenu" element={<AddNewMenu />} />
          <Route path="/updateMenu" element={<UpdateMenu />} />
          <Route path="/displaymenu" element={<MenuByCategoryPage />} />
          <Route path="/displayReservations" element={<ManageTableReservation />} />
          <Route path="/displayOrders" element={<DisplayOrders />} />
          <Route path="/AddOrder" element={<AddNewOrder />} />
          <Route path="/DisplayBuffet" element={<DisplayBuffet />} />
          {/* <Route path="/AdminDashboard" element={<AdminDash />} /> */}
          <Route path="/manageTables" element={<ManageTableReservation />} />
          <Route path="/manageOrders" element={<ManageOrders />} />
          <Route path="/manageBuffet" element={<ManageBuffet />} />
          <Route path="/updateBuffet" element={<UpdateBuffet />} />
          <Route path="/addBuffet" element={<AddBuffet />} />
          <Route path="/Watersports" element={<WatersportActivities />} />
          <Route path="/ManagerDashboard" element={<Dashboard />} />
          <Route path="/reservationNavbar" element={<ReservationNavbar />} />
          <Route path="/AddActivity" element={<AddActivity />} />
          <Route path="/WatersportsManagement" element={<WatersportManage />} />
          <Route path="/addWatersportsReservation" element={<AddReserv />} />
          <Route path="/selectActivity" element={<SelectActivity />} />
          <Route path="/watersportReservations" element={<WatersportReservations />} />
          <Route path="/PastReservations" element={<PastWatersportReservations />} />
          <Route path="/receptionDashboard" element={<ReceptionDashboard />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/CustomerDetails" element={<Details />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/MyBookings" element={<Mybookings />} />
          <Route path="/ManageRoom" element={<ManageRoom />} />
          <Route path="/RoomManagerView" element={<RoomManagerView />} />
          <Route path="/offerPackage" element={<Offer />} />
          <Route path="/Addoffer" element={<AddNewOffer />} />
          {/* <Route path="/halls" element={<HallList />} />
          <Route path="/ViewHall/:id" element={<ViewHall />} />
          <Route path="/EditHall/:id" element={<EditHall />} />
          <Route path="/HallAdminDash" element={<HallAdminDash />} />
          <Route path="/AllHalls" element={<AllHallList />} /> 
          <Route path="/AddHall/:id" element={<HallReservationForm />} />
          <Route path="/availability" element={<HallAvailabilty />} />
          <Route path="/bookHall" element={<BookHall />} />
          <Route path="/HallResource" element={<HallResources />} />
          <Route path="/AllReservations" element={<AdminBookHall />} />
          <Route path="/bookingdata/:id" element={<HallBookingData />} />
          <Route path="/HallCalender" element={<HallCalender />} />
          <Route path="/alldates" element={<Alldates />} /> */}
          <Route path="/editBooking/:id" element={<EditBooking />} />
          <Route path="/AddItem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
