import React from "react";
import './App.css';


//pages &components
import Home from './Pages/Home';
import Signup from './Pages/signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import PasswordReset from './Pages/PasswordReset'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPwd";
import AdminDash from "./Pages/Staff/AdminDash";
import DiningDash from "./Pages/DiningDash";
import DiningNavbar from "./components/DiningNavbar"

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
    <DiningNavbar/>
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
            path="/AdminDashbord"
            element={<AdminDash />}
          />
          <Route
          path="/DiningDashboard"
          element={<Layout2><DiningDash/></Layout2>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
