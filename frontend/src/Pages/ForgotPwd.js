import React from 'react';

import { useForgot } from '../hooks/useForgot';

function Forgotpassword(){
  const {  setEmail, isLoading, error,forgotPassword ,status } = useForgot();

  const handleSubmit = async (e) => {
    e.preventDefault();
    forgotPassword ();
  };
  return (
    <div className='vh-100 container d-flex align-items-center justify-content-center'>
      <div><h2>Forgot Password</h2></div>
      <div className="container bg-body-tertiary w-50 pt-4 rounded">
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Enter Registered Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" required></input>
        
      </div>

      <button type="submit" class="btn btn-primary" disabled={isLoading}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {status && <div className="error bg-primary my-2" style={{color:"white"}}>{status}</div>}
      </form>
      </div>
    </div>
  );
  }
export default Forgotpassword;

