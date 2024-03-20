import React, { useState } from 'react';
import useManagerList from "../../hooks/useDisplaystaff";
import Adminsidebar from "../../components/AdminSidebar";
import { useDelete } from '../../hooks/useAccountDelete';

function UserManage(){
    const { userList,isLoading, error } = useManagerList();
    const {deleteUser} = useDelete()
    const [emailToDelete, setEmailToDelete] = useState('');
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

      const handledelete = async (email) => {
        await deleteUser(emailToDelete) 
        setEmailToDelete('');
      }
    
    return(
        <div>
       <div className=" bg-info-subtle vh-100 row m-0 p-0">
       <Adminsidebar/>
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
                  <button className="btn btn-danger mt-2" onClick={() =>  setEmailToDelete(user.email)} data-bs-toggle="modal" data-bs-target="#Modal">Delete</button>
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
                      <h1 className="modal-title fs-5" id="exampleModalLabel">CAUTION</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    Are you sure you want to delete this user?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     
                       <form action=""  method="delete">
                        
                        <button  className="btn btn-outline-danger" onClick={handledelete}>DELETE</button>
                      
                       </form>
                    
                    </div>
                  </div>
                </div>
              </div>

        </div>
    )
}

export default UserManage;