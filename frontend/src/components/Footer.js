import React, { useState } from 'react';



function Footer(){


    return(
      <div >
         <footer className="bg-dark text-light py-5 mt-4">
             <div className="container">
               <div className="row">
                 <div className="col-md-4">
                   <h2 className="mb-4">About Us</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                   <ul className="list-unstyled">
                     <li><a href="#">Our Story</a></li>
                     <li><a href="#">Our Team</a></li>
                     <li><a href="#">Careers</a></li>
                   </ul>
                 </div>
                 <div className="col-md-4">
                   <h2 className="mb-4">Explore</h2>
                   <ul className="list-unstyled">
                     <li><a href="#">Rooms</a></li>
                     <li><a href="#">Amenities</a></li>
                     <li><a href="#">Gallery</a></li>
                     <li><a href="#">Special Offers</a></li>
                   </ul>
                 </div>
                 <div className="col-md-4">
                   <h2 className="mb-4">Contact Us</h2>
                   <ul className="list-unstyled">
                     <li><i className="fas fa-map-marker-alt me-2"></i>123 Main Street, City, Country</li>
                     <li><i className="fas fa-phone-alt me-2"></i>+123 456 7890</li>
                     <li><i className="fas fa-envelope me-2"></i>info@example.com</li>
                   </ul>
                   <div className="social-links">
                     <a href="#"><i className="fab fa-facebook-f"></i></a>
                     <a href="#"><i className="fab fa-twitter"></i></a>
                     <a href="#"><i className="fab fa-instagram"></i></a>
                     <a href="#"><i className="fab fa-linkedin-in"></i></a>
                   </div>
                 </div>
               </div>
             </div>
             <div className="text-center mt-5">
               <p>&copy; 2024 YourHotelName. All Rights Reserved.</p>
             </div>
             </footer>
      </div>
    )}

 export default Footer;   
