import React from "react";
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Watersport from "./Pages/Staff/WatersportManagement";
import ManagerDashboard from "./Pages/Staff/ManagerDashboard";
import AddActivity from "./Pages/Staff/AddActivity";
import WatersportManage from "./Pages/Staff/WatersportManagement";
import AddReserv from "./Pages/Staff/addWatersportReserv";
import SelectActivity from "./Pages/Staff/SelectActivity";
import WatersportReservations from "./Pages/Staff/watersportReservations";
import ReceptionNavbar from "./components/receptionNavbar";
import ReceptionDashboard from "./Pages/Staff/receptionDashboard";

// Layout component with header and footer

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
