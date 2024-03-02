import React from 'react';
import { useParams } from 'react-router-dom';
import { usePwdReset } from '../hooks/usePwdReset';

const PasswordReset = () => {
  const { token } = useParams();
  const {password,repassword,setPassword,setRepassword,isLoading,error,resetPassword,status} = usePwdReset();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(token);
  };

  return (

    <div className='vh-100 '>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit} >
      <div class="mb-3">
        <label for="password" class="form-label">New password</label><br></br>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Confirm password</label><br></br>
        <input type="password" id="repassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} required></input>
        
      </div>

      <button type="submit" class="btn btn-primary" disabled={isLoading}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {status && <div className="error bg-primary my-2" style={{color:"white"}}>{status}</div>}
      </form>
    </div>
    
  );
};

export default PasswordReset;
