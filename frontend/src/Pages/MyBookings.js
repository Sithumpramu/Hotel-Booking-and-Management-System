import React from 'react';
import RoomReservationList from '../hooks/useRoomReservationList';
import useDeleteRoomReserve from '../hooks/useDeleteRoomReserve';


function useDeleteRoomReserve () {
  const { RoomReservationList, isLoading, error } = useRoomReservationList();// roomlist was there in brackets
  const { DeleteRoomReserve} = useDeleteRoomReserve();
  const [reservationIdToDelete, setreservationId] = useState("");
  

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

  const handleDelete = async () => {
    await DeleteRoomReserve(reservationIdToDelete);
    //console.log(isLoading, "handleDelete loading");
    setreservationIdToDelete("");
  };



//function MyBookings() {
   // const {reservation} =  RoomReservationList();
    return (
        <div>
            <h2>My Bookings</h2>
           {reservation.map((reservation)=> (
                <div className="card">
                {/* List of bookings */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Room Type</th>
                            <th>Booking ID</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{reservation.Rtype}</td>
                            <td>{reservation.id}</td>
                            <td>{reservation.checkindate}</td>
                            <td>{reservation.checkoutdate}</td>
                            <td>{reservation.price}</td>
                            <td>{reservation.status}</td>
                            <td><button onClick={(setreservationIdToDelete)}>Cancel</button></td>
                        </tr>
                        {/* Add more rows for additional bookings */}
                    </tbody>
                </table>
            </div>


            )
            
            )
}
            
        </div>
    );
}

export default useDeleteRoomReserve ;
