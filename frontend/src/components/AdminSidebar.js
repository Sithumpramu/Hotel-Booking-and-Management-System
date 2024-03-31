
import React, { useState } from 'react';
import useImageFetch from '../hooks/useImgfetch';
import { useLogout } from '../hooks/useLogout';
function Adminsidebar(imageName){
  const imageUrl = useImageFetch(imageName); 
  const {logout}=useLogout()

  const handlelogout = ()=>{
      logout()
    }
  
    return(
        <div className="col-3 m-0 p-0">
        <ul className="nav flex-column bg-black pe-1 vh-100">
        {imageUrl && (
        <img src={"Sunset Araliya horizontal.png"} alt={`Image: ${imageName}`}  style={{width:"150px", position:"relative", left:"107px"}} className="mt-4"></img>)}
        <div className="d-flex flex-column  mt-5 justify-content-around fs-5" style={{height:"250px"}}>
          <li className="nav-item border">
            <a className="nav-link text-white fs-6" aria-current="page" href="/Staffmanage">Staff Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white fs-6" aria-current="page" href="/Usermanage">User Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white fs-6" aria-current="page" href="/Accountmanage">Account Management</a>
          </li>
          <li className="nav-item border">
            <a className="nav-link text-white fs-6" aria-current="page" href="/AdminDashbord">Home</a>
          </li>
        </div>
        <div className=""><a href ="" id="userStatus" className="btn mt-5" sty onClick={handlelogout} style={{backgroundColor:"rgb(85, 180, 254)", position:"relative", top:"190px"}}>Logout</a></div>
        </ul>
        

        </div>
    )
}

export default Adminsidebar;