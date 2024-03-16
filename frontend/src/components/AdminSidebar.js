
import React, { useState } from 'react';
function Adminsidebar(){
    return(
        <div className="col-3 m-0 p-0">
        <ul className="nav flex-column bg-black pe-1 vh-100">
        <img src="logo.jpg"style={{width:"150px", position:"relative", left:"107px"}} className="mt-4"></img>
        <div className="d-flex flex-column  mt-5 justify-content-around fs-5" style={{height:"250px"}}>
          <li className="nav-item border">
            <a className="nav-link text-white" aria-current="page" href="/Staffmanage">Staff Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white " aria-current="page" href="/Usermanage">User Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white" aria-current="page" href="/Accountmanage">Account Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white" aria-current="page" href="/AdminDashbord">Home</a>
          </li>
        </div>
        </ul>
        </div>
    )
}

export default Adminsidebar;