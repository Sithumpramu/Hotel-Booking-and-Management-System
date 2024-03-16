import useManagerList from "../../hooks/useDisplaystaff"
function UserManage(){
    const { userList,isLoading, error } = useManagerList();
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
      <h2 className="mb-5 mt-3">User Accounts</h2>
           <div className="col">
            {userList.map(user => (
              <div>
                <div>
                  <div>Name: {user.name}</div>
                  <div>Email: {user.email}</div>
                </div>
                <div>
                  <button className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#Modal">Delete</button>
                </div>
                <hr />
              </div>
            ))}
           </div>


  </div>
</div>
</div>
  



                 {/* model  */}
                 <div className="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Are You Sure?</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      This is Permenent. You can not recover account after deletion.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     
                       <form action=""  method="post">
                        
                        <button  className="btn btn-outline-danger" >DELETE</button>
                      
                       </form>
                    
                    </div>
                  </div>
                </div>
              </div>

        </div>
    )
}

export default UserManage;