import { useEffect,useState } from "react";


const TableReservation = () => {
    const[Table,setAllReservations]=useState (null)
 
    useEffect(()=> {
        const fetchReservations = async () => {
            const response = await fetch ('/Table/')
            const json = await response.json()

            if(response.ok){
                setAllReservations(json)
            }
        }
     
        fetchReservations()
    }, [])



    return(

        <div className="Tablereservation vh-100">
            <h1>
                <u>My Reservations</u>
            </h1><br></br>

            <div className="Table">
                {Table && Table.map((Table)=>{
              // <h4>{Table.Date}</h4>
              //<p><strong>Name: </strong>{Table.Name}</p>
              // <p><strong>Capacity: </strong>{Table.Capacity}</p>
              // <p><strong>Email: </strong>{Table.email}</p>
              // <p><strong>Telephone Number: </strong>{Table.ContactNumber}</p>
                <div>
                    Table.Name
                </div>
                })}
            </div>
        </div>
    )
}

export default TableReservation