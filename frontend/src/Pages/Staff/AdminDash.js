import { useState } from "react"
import { FaUsers, FaUserCog } from 'react-icons/fa';
import { IoMdCalendar, IoMdSettings } from 'react-icons/io';
import Adminsidebar from "../../components/AdminSidebar";

function AdminDash(){


return(

<div className=" bg-info-subtle vh-100 row m-0 p-0">
<Adminsidebar/>
<div className="col">
  <div className="row h4 mb-5" style={{height:"75px"}}>
    <div><p className="mt-5">Admin Dashboard</p></div>
   </div>
  <div className="row d-flex justify-content-around h-25">
    <div className="card col-2 pt-4 d-flex justify-content-center align-items-center"><FaUsers size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Staffmanage">Staff Management</a></div>
    <div className=" card col-2  pt-4 d-flex justify-content-center align-items-center"><FaUserCog size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Usermanage">User Management</a></div>
    <div className="card col-2  pt-4 d-flex justify-content-center align-items-center"><IoMdSettings size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Accountmanage">Account Manage</a></div>
   
  </div> 
  <hr></hr>
    
</div>
</div>
  
);

}

export default AdminDash