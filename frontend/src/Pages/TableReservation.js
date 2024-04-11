import { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";
import useDeleteReservation from "../hooks/useDeleteReservation";
import useUpdateReservation from "../hooks/useUpdateReservation";

const TableReservation = () => {
    const { TableList, isLoading, error } = useTableList();
    const {  } = useTableList();
    const [nameToDelete, setNameToDelete] = useState("");
    const { deleteReservation } = useDeleteReservation();
    const [nameToUpdate, setNameToUpdate] = useState("");
    const[Date, setDate] = useState ("")
    const[Name, setName] = useState ("")
    const[Capacity, setCapacity] = useState ("")
    const[email, setemail] = useState ("")
    const[ContactNumber, setContactNumber] = useState ("")

    if (isLoading) {
        return (
            <div className="alert alert-primary" role="alert">
                Loading...
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const getUpdateData = (reservation) => {
        setNameToUpdate(reservation._id);
        setDate(reservation.Date);
        setName(reservation.Name);
        setCapacity(reservation.Capacity);
        setemail(reservation.email);
        setContactNumber(reservation.ContactNumber);
        //setQty(reservation.Qty);
       // setTableList(reservation. TableList);
    };

   /* const updateDetails = async () => {
        await updateReserv(
            nameToUpdate,
            Date,
            Name,
            Capacity,
            email,
            ContactNumber
        );
    };
*/

    const handleDelete = async () => {
        await deleteReservation(nameToDelete);
        //console.log(isLoading, "handleDelete loading");
        setNameToDelete("");
    };


    return (
        <div className="vh-150">
            <h1>
                My Reservations
            </h1>

            <div class="container text-center">
                {TableList.map((Table) => (
                    <div key={Table._id}>
                        <h4>{Table.Date}</h4>
                        <p><strong>Name: </strong>{Table.Name}</p>
                        <p><strong>Capacity: </strong>{Table.Capacity}</p>
                        <p><strong>Email: </strong>{Table.email}</p>
                        <p><strong>Telephone Number: </strong>{Table.contactNumber}</p>
                        <button type="button" class="btn btn-primary"
                        style={{ width: "10rem" }}>Edit Details</button>
                        <button type="button" class="btn btn-primary "
                            href="#"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#Modal"
                            onClick={handleDelete}>Cancel Reservation</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TableReservation;
