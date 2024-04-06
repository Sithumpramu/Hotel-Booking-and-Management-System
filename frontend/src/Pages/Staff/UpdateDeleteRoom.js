import React from 'react';
import ManagerPanel from '../../components/RoomManagerNavbar';

function UpdateDelete() {
    return (
        <div>
            <ManagerPanel/>
            <div className='row bs' >
                <div className="col-md-4">
                    <img src={"kal.jpg"} className="smallimg"alt="Room 1"/>
                </div>
                <div className="col-md-7">
                    <h1>Room ID and Type</h1>
                    <p>Description</p>
                    <p>Capacity</p>
                    <p>Number of Beds</p>
                    <p>Price</p>

                    <div style={{ float: 'right' }}>
                    <button className="btn1">Update</button>
                        
                        <button className="btn1">Delete</button>
                    </div>
                </div>
            </div>

            <div className='row bs' >
                <div className="col-md-4">
                    <img src="kal.jpg" className="smallimg" alt="Room 2"/>
                </div>
                <div className="col-md-7">
                    <h1>Room ID and Type</h1>
                    <p>Description</p>
                    <p>Capacity</p>
                    <p>Number of Beds</p>
                    <p>Price</p>

                    <div style={{ float: 'right' }}>
                    <button className="btn1">Update</button>
                        
                        <button className="btn1">Delete</button>
                </div>
            </div>

            <div className='row bs' >
                <div className="col-md-4">
                    <img src={"kal.jpg"} className="smallimg" alt="Room 1"/>
                </div>
                <div className="col-md-7">
                    <h1>Room ID and Type</h1>
                    <p>Description</p>
                    <p>Capacity</p>
                    <p>Number of Beds</p>
                    <p>Price</p>

                    <div style={{ float: 'right' }}>
                        <button className="btn1">Update</button>
                        
                        <button className="btn1">Delete</button>
                    </div>
                    
                </div>
            </div>

            <div className='row bs' >
                <div className="col-md-4">
                    <img src={"kal.jpg"} className="smallimg" alt="Room 1"/>
                </div>
                <div className="col-md-7">
                    <h1>Room ID and Type</h1>
                    <p>Description</p>
                    <p>Capacity</p>
                    <p>Number of Beds</p>
                    <p>Price</p>

                    <div style={{ float: 'right' }}>
                    <button className="btn1">Update</button>
                        
                        <button className="btn1">Delete</button>
                    </div>
                </div>
            </div>
           
        </div>

        </div>
    );
}

export default UpdateDelete;
