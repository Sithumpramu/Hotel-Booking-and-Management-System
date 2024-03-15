import React, { useState ,useEffect} from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home(){
  const {logout}=useLogout()
  const {user}=useAuthContext()
  const navigate = useNavigate();
  const handleZoomIn = (element) => {
    element.style.transform = 'scale(1.1)';
  };

  const handleZoomOut = (element) => {
    element.style.transform = 'scale(1)';
  };


  
    const location = useLocation();
    useEffect(() => {
      // Store the current location in localStorage
      localStorage.setItem('prevPath', location.pathname);
    }, [location.pathname]);
    console.log(location.pathname)

    const HandleButtonClick = () => {

      const token = localStorage.getItem('user');
      console.log(token)
  
      if (!token) {
        // Redirect to login page if token is missing
        navigate('/Login');
        return;
      }
  
      navigate('/test')
    };
  


  function navigateToPage() {
    var dropdown = document.getElementById("pageSelector");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;

    if (selectedValue === "page1") {
      window.location.href = "";
    } else if (selectedValue === "page2") {
      window.location.href = "https://www.youtube.com/";
    }
  }


  
    return(
      <div >

        <div className="container d-flex justify-content-center mt-3 vh-75">
            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="change1.png" className="d-block w-75 mx-auto" alt="Image 1"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="change2.png" className="d-block w-75 mx-auto" alt="Image 2"></img>
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

        <div className="booknow d-flex justify-content-center mt-4 w-100">
          <select id="pageSelector" className="me-4 rounded">
          <option value="page1">Kalutara</option>
          <option value="page2">Kataragama</option>
          </select>
          <button className="btn btn-secondary"  onClick={navigateToPage}>Book Now</button>
        </div>

        <div className="middle row d-flex justify-content-around">
        <div
          className="card text-bg-dark mt-4"
          style={{width: '45vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src="kal.jpg" className="card-img" alt="..." style={{width: '46vw',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <a href="" className="text-white fw-bold">
              View
            </a>
          </div>
        </div>

        <div
          className="card text-bg-dark mt-4"
          style={{width: '45vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src="kal.jpg" className="card-img" alt="..." style={{width: '46vw',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <a href="" className="text-white fw-bold">
              View
            </a>
          </div>
        </div>
      </div>

       
        <h1 className="text-center mb-5 mt-5 custom-font">Facilities you will always enjoy</h1>

         <div className="row mt-3 justify-content-around">
            <div className="card" style={{width: "18rem"}}>
               <img src="image.jpg" className="card-img-top pt-3" alt="..."></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Wedding hall</h5>
                
               </div>
               
               <div className="card-body d-flex justify-content-center">
                 <a href="#" className="text-decoration-none">Card link</a>
                 <a href="#" className="text-decoration-none ms-4">Another link</a>
               </div>
             </div>
         
                   
             <div className="card" style={{width: "18rem"}}>
               <img src="image.jpg" className="card-img-top pt-3" alt="..."></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Wedding hall</h5>
                
               </div>
               
               <div className="card-body d-flex justify-content-center">
                 <a href="#" className="text-decoration-none">Card link</a>
                 <a href="#" className="text-decoration-none ms-4">Another link</a>
               </div>
             </div>
             
                   
            <div className="card" style={{width: "18rem"}}>
               <img src="image.jpg" className="card-img-top pt-3" alt="..."></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Wedding hall</h5>
                
               </div>
               
               <div className="card-body d-flex justify-content-center">
                 <a href="#" className="text-decoration-none">Card link</a>
                 <a href="#" className="text-decoration-none ms-4">Another link</a>
               </div>
             </div>
         
             <div className="card" style={{width: "18rem"}}>
               <img src="image.jpg" className="card-img-top pt-3" alt="..."></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Wedding hall</h5>
                
               </div>
               
               <div className="card-body d-flex justify-content-center">
                 <a href="#" className="text-decoration-none">Card link</a>
                 <a href="#" className="text-decoration-none ms-4">Another link</a>
               </div>
             </div>
             
          </div>


           {/* quote about hotel chain  */}
           <div className="card text-bg-dark mt-5">
             <img src="katha.jpg" className="card-img" alt="..." style={{width: "99vw", height: "50vh"}}></img>
             <div className="card-img-overlay">
               
               <p className="card-text">"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"</p>
               <a href="" className="text-white fw-bold btn btn-outline-primary">BooK Now</a>
             </div>
           </div>

           <div>
            <a className='btn btn-info' onClick={HandleButtonClick }>Test button</a>
           </div>

            
    
</div>


        

    )

}



export default Home;





