import { useState } from "react";
import { FaUsers, FaUserCog } from 'react-icons/fa';
import { IoMdCalendar, IoMdSettings } from 'react-icons/io';
import RestaurantNavbar from "../../components/RestaurantManagerNavbar";

function AdminDash(){

  return(
    <div className="row m-0 p-0">
     
          <RestaurantNavbar/>
      
        <div className="col m-9 p-0">
          <div className=" h4 " style={{height:"100px"}}>
            <div><p className="mt-5">Restaurant Manager Dashboard</p></div>
          </div>
          
          <hr></hr>
          <iframe
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width: '100%', // Set the width to 100%
              maxWidth: '540px', // Limit the maximum width
              height: '380px'
            }}
            src="https://charts.mongodb.com/charts-project-0-sqqdz/embed/charts?id=660ab80c-c20d-4b70-84cf-523695f27b2a&maxDataAge=60&theme=light&autoRefresh=true"
            title="MongoDB Chart"
          ></iframe>
        </div>
      </div>
    
  );

}

export default AdminDash;