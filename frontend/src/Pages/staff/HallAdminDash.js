import { useState } from "react"
import React from 'react';
import NewHallDash from '../../components/NewHallDash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faCalendarAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import "./halllist.css";
import { Link } from 'react-router-dom';



function HallAdminDash() {
  return (
    <div className="bg-white">
   <NewHallDash />
    <div className="">
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 mb-4 ">
          <div className="card h-100 rounded bg-light">
            <div className="card-body d-flex flex-column align-items-center justify-content-center pl-5">
              <h5 className="card-title pt-5 pb-5"><FontAwesomeIcon icon={faHotel} className="mr-2" />Halls</h5>
             
              <Link to="/halls" className="btn btn-primary">view</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 ">
          <div className="card h-100 rounded bg-light">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title pt-5 "><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Reservations</h5>
              <h6 className='pb-5'>Reservation count:25</h6>
              <Link to="/AllReservations" className="btn btn-primary">Check Now</Link>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 rounded bg-light">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title pb-5"><FontAwesomeIcon icon={faCalendarAlt} className="mr-4 pt-5 " />Calendar</h5>
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 rounded bg-light">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title pt-5 pb-5"><FontAwesomeIcon icon={faDatabase} className="mr-2" />Resources</h5>
             < Link to="/HallResource" className="btn btn-primary">view</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HallAdminDash;
