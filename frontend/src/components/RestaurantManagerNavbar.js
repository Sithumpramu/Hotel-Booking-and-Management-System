import React, { useState } from "react";

import { useLogout } from "../hooks/useLogout";

function RestaurantNavbar() {
  const { logout } = useLogout();
  let selectedId = localStorage.getItem("selectedMenuId")
    ? localStorage.getItem("selectedMenuId")
    : "Home";

  const handlelogout = () => {
    logout();
  };

  const setSelectedId = (id) => {
    localStorage.setItem("selectedMenuId", id);
  };

  return (
    <div className="m-0 p-0 vh-100 " 
    >
    <ul className="nav flex-column bg-black pe-1 vh-100 position-fixed col-3">
  
    <div className="d-flex justify-content-center align-items-center"><img src="logo.jpg" style={{width:"150px"}} className="mt-4 "></img></div>
    <div className="d-flex flex-column  mt-5 justify-content-around fs-5" style={{height:"250px"}}>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/AdminDashboard">Home</a>
      </li>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/manageTables">Manage Table Reservations</a>
      </li>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/manageOrders">Manage Food Orders</a>
      </li>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/AdminDashbord">Manage Buffet</a>
      </li>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/AdminDashbord"  >Kitchen Inventory</a>
      </li>
      <li className="nav-item border">
        <a className="nav-link text-white fs-6" aria-current="page" href="/menu"  >Update Menu</a>
      </li>
    </div>
    <div className=""><a href ="" id="userStatus" className="btn mt-5" sty onClick={handlelogout} style={{backgroundColor:"rgb(85, 180, 254)", position:"relative", top:"190px"}}>Logout</a></div>
    </ul>
</div>
  );
}

export default RestaurantNavbar;