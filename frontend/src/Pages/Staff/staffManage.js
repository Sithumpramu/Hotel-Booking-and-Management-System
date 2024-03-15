import useManagerList from "../../hooks/useDisplaystaff"

function Staffmanage(){
 const { managerList, staffList, isLoading, error } = useManagerList();

    return(
        <div>
<div className=" bg-info-subtle vh-100 row m-0 p-0">
<div className="col-3 m-0 p-0">
<ul className="nav flex-column bg-black vh-100">
<img src="logo.jpg"style={{width:"150px", position:"relative", left:"107px"}} className="mt-4"></img>
<div className="d-flex flex-column bg-info h-25 mt-5 justify-content-around">
  <li className="nav-item ">
    <a className="nav-link active" aria-current="page" href="#">Manage Users</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Manage Staff</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#">Create Staff</a>
  </li>
</div>
</ul>
</div>
<div className="col">
  <div className="row">
      <h2 className="mb-5 mt-3">Staff Accounts</h2>
           <div className="col">
           <h5 className="mb-4">Managers</h5>
            {managerList.map(manager => (
              <div>
                <div>
                  <div>Name: {manager.name}</div>
                  <div>Email: {manager.email}</div>
                  <div>Role: {manager.role}</div>
                </div>
                <div>
                  <button className="btn btn-danger mt-2">Delete</button>
                </div>
                <hr />
              </div>
            ))}
           </div>
           <div className="col">
            <h5 className="mb-4">Staff</h5>
            {staffList.map(staff => (
              <div>
                <div>
                  <div>Name: {staff.name}</div>
                  <div>Email: {staff.email}</div>
                  <div>Role: {staff.role}</div>
                </div>
                <div>
                  <button className="btn btn-danger mt-2">Delete</button>
                </div>
                <hr />
              </div>
            ))}
           </div>
  </div>
</div>
</div>
  

        </div>
    )
}

export default Staffmanage
