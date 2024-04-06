import React, { useState } from 'react';


const DiningDash= () => {
    return(
      <nav class="navbar navbar-expand-lg bg-body-primary">
      <div class="container-fluid">
      <img src="logo.jpg" style={{width:"130px"}}></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Buffets</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Food & Beverages
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Srilankan</a></li>
                <li><a class="dropdown-item" href="#">Chinese</a></li>
                <li><a class="dropdown-item" href="#">Indian</a></li>
                <li><a class="dropdown-item" href="#">Pizzas & Pasta</a></li>
                <li><a class="dropdown-item" href="#">Cakes</a></li>
                <li><a class="dropdown-item" href="#">Desserts</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Table Reservations
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Create New Reservation</a></li>
                <li><a class="dropdown-item" href="#">My Reservations</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default DiningDash