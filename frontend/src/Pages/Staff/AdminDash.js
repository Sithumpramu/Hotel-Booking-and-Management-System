import { useState } from "react"
import { FaUsers, FaUserCog } from 'react-icons/fa';
import { useLogout } from '../../hooks/useLogout'
import { IoMdCalendar, IoMdSettings } from 'react-icons/io';
import Adminsidebar from "../../components/AdminSidebar";

function AdminDash(){
  const {logout}=useLogout()

const handlelogout = ()=>{
    logout()
  }

return(

<div className=" bg-info-subtle vh-100 row m-0 p-0">
<Adminsidebar/>
<div className="col">
  <div className="row h4 mb-5" style={{height:"75px"}}>
  <div className="text-end"><a href ="" id="userStatus" className="btn btn-secondary ms-4 mt-2" onClick={handlelogout}>Logout</a></div>
    <div><p>Admin Dashboard</p></div>
   </div>
  <div className="row d-flex justify-content-around h-25">
    <div className="bg-primary col-2 pt-4"><FaUsers size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Staffmanage">Staff Management</a></div>
    <div className="bg-primary col-2  pt-4 "><FaUserCog size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="/Usermanage">User Management</a></div>
    <div className="bg-primary col-2  pt-4"><IoMdSettings size={50}/><a className="nav-link mt-5 fs-5" aria-current="page" href="#">Account Manage</a></div>
  </div> 
    
</div>
</div>
  
);

}

export default AdminDash