import React, { useState } from 'react';

const DiningDash= () => {
    return(
        <div className='Dining vh-150'>
          <h1>
            Dining
          </h1>
          {/* Pictures changing  */}
        <div className="container d-flex justify-content-center mt-3 vh-75">
            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="banner1.jpg" className="d-block w-75 mx-auto" alt="Image 1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="banner4.jpg" className="d-block w-75 mx-auto" alt="Image 2"></img>
                    </div>
                     {/* Add more carousel items with additional images  */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
             <br></br> 
             <h2 className="card-title text-center">Food Categories </h2>

     <div class="container ">
    <div class="row g-1">
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="srilankan.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Srilankan</h5>
        <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="indian.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
      <h5 class="card-title">Indian</h5>
      <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="chinese.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
      <h5 class="card-title">Chinese</h5>
      <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="pizza.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
      <h5 class="card-title">Pizzas & Pasta</h5>
      <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="cakes.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Cakes</h5>
        <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card ">
      <img src="desserts.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
      <h5 class="card-title">Desserts</h5>
      <a href="#" class="btn btn-primary">View Products</a>
      </div>
    </div>
  </div>
</div>
</div>
 </div>  

    )
}

export default DiningDash