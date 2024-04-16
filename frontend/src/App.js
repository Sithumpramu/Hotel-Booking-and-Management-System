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
import PastWatersportReservations from "./Pages/Staff/pastWatersportReserv";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";

//User management
import AdminDash from "./Pages/Staff/AdminDash";
import DiningDash from "./Pages/DiningDash";
import DiningNavbar from "./components/DiningNavbar";
import TableReservation from "./Pages/TableReservation";
import AddReservation from "./Pages/AddReservation";
import MenuItems from "./Pages/Staff/MenuManagement";
import AddNewMenu from "./Pages/Staff/AddMenu";
import UpdateMenu from "./Pages/Staff/UpdateMenu";
import MenuByCategoryPage from "./Pages/DisplayMenu";
import RestaurantNavbar from "./components/RestaurantManagerNavbar";
import ManageTableReservation from "./Pages/Staff/TableReserManagement";
import DisplayOrders from "./Pages/DisplayFoodOrders";
import AddNewOrder from "./Pages/AddOrders";
import DisplayBuffet from "./Pages/DisplayBuffet";
import ManageOrders from "./Pages/Staff/DisplayOrders";
import ManageBuffet from "./Pages/Staff/ManageBuffets";
import UpdateBuffet from "./Pages/Staff/UpdateBuffet";
import AddBuffet from "./Pages/Staff/AddBuffet";
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
            path="/addBuffet"
            element={
              <Layout3>
                <AddBuffet />
              </Layout3>
            }
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
          <Route
            path="/PastReservations"
            element={<PastWatersportReservations />}
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