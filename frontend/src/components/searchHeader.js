import React from 'react'
// import { useDispatch } from "react-redux";
// import { setLogout } from "../state/state.js";
// import { useNavigate } from 'react-router-dom';


const searchHeader = ({dashboard}) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    
    

  return (
    <nav class="navbar bg-light p-4">
            <div class="container-fluid">
              <h4>{dashboard}</h4>

              <div class="d-flex gap-3">
              <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
              </div>
            </div>
          </nav>
  )
}

export default searchHeader