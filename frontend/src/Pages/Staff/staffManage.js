import useManagerList from "../../hooks/useDisplaystaff"

function Staffmanage(){
 const { managerList, staffList, isLoading, error } = useManagerList();

    return(
        <div>
         <h2>All staff users</h2>
        <ul>
        {managerList.map(manager => (
          <li>
            <div>Name: {manager.name}</div>
            <div>Email: {manager.email}</div>
            <div>Role: {manager.role}</div>
          </li>
        ))}
        <a href="" className="btn">Delete</a>
      </ul>
      <ul>
        {staffList.map(staff => (
          <li>
            <div>Name: {staff.name}</div>
            <div>Email: {staff.email}</div>
            <div>Role: {staff.role}</div>
          </li>
        ))}
         <a href="" className="btn btn-danger">Delete</a>
      </ul>
        </div>
    )
}

export default Staffmanage
