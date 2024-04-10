import { useEffect, useState } from "react";
import useTableList from "../hooks/useTableResvList";

const TableReservation = () => {
    const { TableList, isLoading, error } = useTableList();

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



    return (

        <div className=" vh-100">
            <h1>
                <u>My Reservations</u>
            </h1>

            <div className="">
                {TableList.map((Table) => {
                    <div>
                    <h4>{Table.Date}</h4>
                    <p><strong>Name: </strong>{Table.Name}</p>
                    <p><strong>Capacity: </strong>{Table.Capacity}</p>
                    <p><strong>Email: </strong>{Table.email}</p>
                    <p><strong>Telephone Number: </strong>{Table.ContactNumber}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TableReservation