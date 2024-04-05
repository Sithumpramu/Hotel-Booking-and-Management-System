import React, { useState ,useEffect} from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useImageFetch from '../hooks/useImgfetch';

function Home({ imageName }){
  const imageUrl = useImageFetch(imageName); 
  const {logout}=useLogout()
  const {user}=useAuthContext()
  const navigate = useNavigate();
  const [hoveredElement, setHoveredElement] = useState(null);



  const handleMouseOver = (elementId) => {
    setHoveredElement(elementId);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

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
  




  
    return(
      <div className="container-fluid">

        <div className="container d-flex justify-content-center mt-3">
       
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"carouselImg1.jpg"} alt={`Image: ${imageName}`}className="d-block w-100 mx-auto"  ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={"carouselImg2.jpg"} alt={`Image: ${imageName}`} className="d-block w-100 mx-auto"  ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={"carouselImg3.jpg"} alt={`Image: ${imageName}`} className="d-block w-100 mx-auto" ></img>
                    </div>

                     
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
          <a href=""className="btn mb-5 mt-4" style={{backgroundColor:"rgb(85, 180, 254)"}} >Book Now</a>
        </div>

        {/* <div className=" col d-flex justify-content-center">
        
        <div
          className="card mt-4"
          style={{width: '40vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src={"Room.jpg"} alt={`Image: ${imageName}`} className="card-img"  style={{width: '100%',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay text-start">
            <h5 className="card-title text-white">Rooms</h5>
            <p className="card-text text-white fs-6 fw-bold bg-black">
            "Discover your sanctuary away from home, where tranquility meets modern convenience."
            </p>
            <a href="" className="text-white fw-bold btn btn-outline-primary ">
              Explore
            </a>
          </div>
        </div>
      
        <div
          className="card mt-4"
          style={{width: '40vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src={"Hall.jpg"} alt={`Image: ${imageName}`} className="card-img"  style={{width: '100%',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay">
          
            <h5 className="card-title  text-white">Event Hall</h5>
            <p className="card-text text-white fs-6 fw-bold bg-black">
            "Elevate your events to unforgettable heights, where every occasion becomes a memory."
            </p>
            <a href="" className="text-white fw-bold  btn btn-outline-primary">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className=" col d-flex justify-content-center">
    
        <div
          className="card mt-4"
          style={{width: '40vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src={"Restaurent.jpg"} alt={`Image: ${imageName}`} className="card-img"  style={{width: '100%',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay">
          
            <h5 className="card-title  text-white">Unmatched Taste</h5>
            <p className="card-text text-white fs-6 fw-bold bg-black">
            "Savor every moment with our culinary delights, where every dish is a journey of flavors."
            </p>
            <a href="" className="text-white fw-bold  btn btn-outline-primary">
              Explore
            </a>
          </div>
        </div>
      
        <div
          className="card mt-4"
          style={{width: '40vw'}}
          onMouseOver={(e) => handleZoomIn(e.currentTarget.querySelector('.card-img'))}
          onMouseOut={(e) => handleZoomOut(e.currentTarget.querySelector('.card-img'))}
        >
          <img src={"Watersports.jpg"} alt={`Image: ${imageName}`} className="card-img"  style={{width: '100%',transition: 'transform 0.3s'}}/>
          <div className="card-img-overlay">
        
            <h5 className="card-title  text-white">Entertainment</h5>
            <p className="card-text text-white fs-6 fw-bold bg-black">
            "Dive into adventure with watersports activities, where every wave brings excitement."
            </p>
            <a href="" className="text-white fw-bold btn btn-outline-primary">
              Explore
            </a>
          </div>
        </div>
      </div> */}

      <div className='row mt-4'>
         <div className='col d-flex justify-content-center align-items-center'>
                <div 
                  className="card" 
                  style={{ width: "35vw" }}   
                  onMouseOver={(e) => {
                    handleZoomIn(e.currentTarget.querySelector('.card-img'));
                    handleMouseOver(1);
                  }}
                  onMouseOut={(e) => {
                    handleZoomOut(e.currentTarget.querySelector('.card-img'));
                    handleMouseOut();
                  }}
                >
                  <img src="Room.jpg" alt="" className="card-img" style={{width: '100%',transition: 'transform 0.3s'}}/>
                 
                  <div className="card-img-overlay d-flex align-items-end">
                    <div className="card-overlay-content text-light">
                      <h4 className="card-title">Comfortable</h4>
                      {hoveredElement === 1 && (<div className="bg-dark py-3">
                      <p className="card-description fs-6 fw-bold">"Discover your sanctuary away from home, where tranquility meets modern convenience."</p>
                      <button className="btn btn-primary">Explore</button></div>)}
                    </div>
                  </div>
                </div>
      
                <div className="card ms-4" style={{width:"35vw"}} 
                  onMouseOver={(e) => {
                    handleZoomIn(e.currentTarget.querySelector('.card-img'));
                    handleMouseOver(2);
                  }}
                  onMouseOut={(e) => {
                    handleZoomOut(e.currentTarget.querySelector('.card-img'));
                    handleMouseOut();
                  }}
                >
                  <img src="Room.jpg" alt="" className="card-img" style={{width: '100%',transition: 'transform 0.3s'}}/>
     
                  <div className="card-img-overlay d-flex align-items-end" >
                    <div className="card-overlay-content text-light">
                      <h4 className="card-title">Elegant</h4>
                      {hoveredElement === 2 && (<div className='bg-dark py-3'>
                      <p className="card-description  fs-6 fw-bold">"Elevate your events to unforgettable heights, where every occasion becomes a memory."</p>
                      <button className="btn btn-primary">Explore</button></div>)}
                    </div>
                  </div>
                </div>
          
          </div>
      
          <div className='col d-flex justify-content-center align-items-center mt-4'>
            <div className="card" 
                    style={{width:"35vw"}} 
                    onMouseOver={(e) => {
                    handleZoomIn(e.currentTarget.querySelector('.card-img'));
                    handleMouseOver(3);
                  }}
                  onMouseOut={(e) => {
                    handleZoomOut(e.currentTarget.querySelector('.card-img'));
                    handleMouseOut();
                  }}
             >
                  <img src="Room.jpg" alt="" className="card-img" style={{width: '100%',transition: 'transform 0.3s'}}/>
              
                  <div className="card-img-overlay d-flex align-items-end" >
                    <div className="card-overlay-content text-light">
                      <h4 className="card-title">Unmatched Taste</h4>
                      {hoveredElement === 3 && (<div className='bg-dark py-3 px-2'>
                      <p className="card-description fs-6 fw-bold">"Savor every moment with our culinary delights, where every dish is a journey of flavors."</p>
                      <button className="btn btn-primary">Explore</button></div>)}
                    </div>
                  </div>
                </div>
                
                <div className="card ms-4" style={{width:"35vw"}}
                  onMouseOver={(e) => {
                    handleZoomIn(e.currentTarget.querySelector('.card-img'));
                    handleMouseOver(4);
                  }}
                  onMouseOut={(e) => {
                    handleZoomOut(e.currentTarget.querySelector('.card-img'));
                    handleMouseOut();
                  }}
                  >
                  <img src="Room.jpg" alt="" className="card-img" style={{width: '100%',transition: 'transform 0.3s'}}/>
               
                  <div className="card-img-overlay d-flex align-items-end" >
                    <div className="card-overlay-content text-light">
                      <h4 className="card-title">Entertainment</h4>
                      {hoveredElement === 4 && (<div className='bg-dark py-3 px-2'>
                      <p className="card-description fs-6 fw-bold">"Dive into adventure with watersports activities, where every wave brings excitement."</p>
                      <button className="btn btn-primary">Explore</button></div>)}
                    </div>
                  </div>
                </div>
          </div>
      </div>


        <h1 className="text-center mb-5 mt-5 custom-font">Benifits you will always enjoy</h1>
        {imageUrl && (
         <div className="row mt-3 justify-content-around">
            <div className="card" style={{width: "14rem", height:"20rem"}}>
               <img src={"Accomadation.png"} alt={`Image: ${imageName}`} className="card-img-top pt-3" ></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Comfortable Accommodations</h5>
                
               </div>
               
             </div>
         
                   
             <div className="card" style={{width: "14rem", height:"20rem"}}>
               <img src={"Bestprice.png"} alt={`Image: ${imageName}`} className="card-img-top pt-3" ></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Best Rate Guarantee</h5>
                
               </div>
               

             </div>
             
                   
            <div className="card" style={{width: "14rem", height:"20rem"}}>
               <img src={"choice.png"} alt={`Image: ${imageName}`} className="card-img-top pt-3" ></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Flexibility Choices</h5>
                
               </div>

 
             </div>
         
             <div className="card" style={{width: "14rem", height:"20rem"}}>
               <img src={"offer.png"} alt={`Image: ${imageName}`} className="card-img-top pt-3" ></img>
               <div className="card-body">
                 <h5 className="card-title text-center">Special Offers and Rewards</h5>
                
               </div>
               

              
             </div>
            
          </div>
 )} 

         
           <div className="card text-bg-dark mt-5">
           
             <img src={"Panorama.jpg"} alt={`Image: ${imageName}`} className="card-img" style={{ height: "50vh"}}></img>
             <div className="card-img-overlay">
               
               <h4 className="card-text">"Experience comfort beyond measure, book your stay today!"</h4>
               <a href="" className="text-white fw-bold btn btn-outline-primary">Book Now</a>
             </div>
           </div>



            
    
</div>


        

    )

}



export default Home;





