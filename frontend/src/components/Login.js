import React, {useState,useEffect} from "react";

import { useLogin } from "../hooks/useLogin";
import { useLocation, useNavigate } from 'react-router-dom';
import useImageFetch from '../hooks/useImgfetch';


  const Login = ({ imageName }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const imageUrl = useImageFetch(imageName); 
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await login(email, password)
      
    }




    return(
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 " style={{backgroundImage: 'url("Wave.svg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {imageUrl && (
         <img src={"Sunset Araliya horizontal.png"} alt={`Image: ${imageName}`} style={{width: "200px", position:"absolute", top:"12vh"}}></img>)}
        <div className="container bg-body-tertiary w-50 pt-4 rounded">
          <form action="" onSubmit={handleSubmit} >
           <div className="mb-3">
             <label for="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" name = "email" required onChange={(e)=>{setEmail(e.target.value);}}></input>
   
           </div>
           <div className="mb-2">
             <label for="exampleInputPassword1" className="form-label">Password</label>
             <input type="password" className="form-control" name = "pwd" id="Password1" required onChange={(e)=>{setPassword(e.target.value);}}></input>
           </div>
           
             <div className="forgot d-flex justify-content-end me-2 mb-3 ">
             <a href="/ForgotPwd" className="text-decoration-none">Forgot Password?</a>
           </div>
           <div className="d-flex align-items-center justify-content-center mb-2">
           <button type="submit" className="btn btn-primary w-25" disabled={isLoading} >Login</button>
           </div>
           {error && <div className="error bg-danger my-2" style={{color:"white"}}>{error}</div>}
          </form>
          <div className="new d-flex justify-content-center">
          <p>Don't have an account?</p>
          <a href="/Signup" className="ms-2 text-decoration-none">Register</a>
       
          </div>
       </div>
    </div>
    )
    
  }

export default Login;