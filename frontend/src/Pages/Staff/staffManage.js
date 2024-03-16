import useManagerList from "../../hooks/useDisplaystaff"
import Adminsidebar from "../../components/AdminSidebar";
function Staffmanage(){
 const { managerList, staffList,isLoading, error } = useManagerList();

 if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

    return(
        <div>
       <div className=" bg-info-subtle vh-100 row m-0 p-0">
       <Adminsidebar/>
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
                  <button className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#Modal">Delete</button>
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
                  <button className="btn btn-danger mt-2"  data-bs-toggle="modal" data-bs-target="#Modal">Delete</button>
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

export default Staffmanage
