function Dashboard(){
    return(
      <div>

        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>f
        </ul>

        <br></br>

        <h1>Welcome to Manager Dashboard!</h1>

        <br></br>

        <div class="d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-outline-info" type="button">User Manager</button>
          <button class="btn btn-outline-info" type="button">Room Manager</button>
          <button class="btn btn-outline-info" type="button">Restaurant Manager</button>
          <button class="btn btn-outline-info" type="button">Event & Activity manager</button>
          <button class="btn btn-outline-info" type="button">Financial Manager</button>
        </div>
      </div>
      

      

    
    )
}

export default Dashboard;