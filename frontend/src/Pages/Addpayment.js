// import { usePaymentSubmission } from '../hooks/usePayment';
// import { useFormState } from '../hooks/usePayment';
// import useAddRoomReserve from '../hooks/useAddRoomReserve';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../hooks/useAuthContext';
// import React, { useState } from 'react';


// function AddPayment() {
//     const { addRoomReserve, isLoading, error } = useAddRoomReserve();
//     const location = useLocation();
//     const { checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno,RoomResvID} = location.state;
//     const {user}=useAuthContext()
//     const [Email, setEmail] = useState(user ? user.email : '');
//     const { formData, handleOnChange } = useFormState({
//         c_name: "",
//         email: Email,
//         card_number: "",
//         cvc: "",
//         card_expiration: "",
//     });

//     // const handleEmailChange = (e) => {
//     //     setEmail(e.target.value);
//     // }

//     console.log('Check-in Date:', checkinDate);
//     console.log('Check-out Date:', checkoutDate);
//     console.log('Number of Guests:', guests);
//     console.log('Number of id:', roomId);
//     console.log('Number of name:', name);
//     console.log('Number of email:', email);
//     console.log('Number of address:', Address);
//     console.log('Number of no:', phoneno);
//     console.log('Booking id:', RoomResvID);

//     const { submitOrder, sendThankYouEmail } = usePaymentSubmission();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await submitOrder(formData);
//             if (response.ok) {
//                 console.log("Order added to cart:", await response.json());
//                 addRoomReserve(checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno,RoomResvID);
//                 // await sendThankYouEmail(formData.email);
//                 console.log("Thank you email sent to:", formData.email);
//                 alert("Order added to Cart!");


//             } else {
//                 throw new Error("Failed to add order");
//             }
//         } catch (error) {
//             console.error("Error adding order or sending email:", error);
//             alert("An error occurred while processing your request. Please try again later.");
//         }
//     };

//     return (
//         <div className="add-paym">
//             <form onSubmit={handleSubmit}>
            
//                 <h2>Payment Form</h2>
//                 <label>Customer Name:</label>
//                 <input type="text" id="c_name" name="c_name" value={formData.c_name} onChange={handleOnChange} /><br />
//                 <label>Email:</label>
//                 <input type="text" id="email" name="email" value={Email}  /><br />
//                 <label>Card Number:</label>
//                 <input type="number" id="card_number" name="card_number" value={formData.card_number} onChange={handleOnChange} /><br />
//                 <label>Cvc:</label>
//                 <input type="number" id="cvc" name="cvc" value={formData.cvc} onChange={handleOnChange} /><br />
//                 <label>Card Expiration:</label>
//                 <input type="date" id="card_expiration" name="card_expiration" value={formData.card_expiration} onChange={handleOnChange} /><br />
//                 <button id="addbtn">Add Payment</button>
//               </form><br />
//         </div>
//     );
// }

// export default AddPayment;


import { useState } from 'react';
import { usePaymentSubmission } from '../hooks/usePayment';
import { useFormState } from '../hooks/usePayment';
import useAddRoomReserve from '../hooks/useAddRoomReserve';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';



function AddPayment() {
    const { addRoomReserve, isLoading, } = useAddRoomReserve();
    const location = useLocation();
    const { checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno,RoomResvID,price} = location.state;
    const {user}=useAuthContext()
    const [Email, setEmail] = useState(user ? user.email : '');
    const { formData, handleOnChange } = useFormState({
        c_name: "",
        email: Email,
        card_number: "",
        cvc: "",
        card_expiration: "",
    });

    console.log('Check-in Date:', checkinDate);
    console.log('Check-out Date:', checkoutDate);
    console.log('Number of Guests:', guests);
    console.log('Number of id:', roomId);
    console.log('Number of name:', name);
    console.log('Number of email:', email);
    console.log('Number of address:', Address);
    console.log('Number of no:', phoneno);
    console.log('Booking id:', RoomResvID);
    console.log("price",price)

    const { submitOrder, sendThankYouEmail } = usePaymentSubmission();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.c_name || !formData.email || !formData.card_number || !formData.card_expiration) {
            setError("All fields are required.");
            return;
        }

        setError(null);

        try {
            const { c_name, email, card_number, card_expiration} = formData;
            const orderData = { c_name, email, card_number, card_expiration};

            const response = await submitOrder(orderData);
            if (response.ok) {
                console.log("Reservation added:", await response.json());
                addRoomReserve(checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno,RoomResvID,price);
                // await sendThankYouEmail(email);
                console.log("Thank you email sent to:", email);
                alert("Reservation Complete!");
                
                
            } else {
                throw new Error("Failed to add reservation");
            }
        } catch (error) {
            console.error("Error adding reservation or sending email:", error);
            alert("An error occurred while processing your request. Please try again later.");
        }
    };

    return (
        <div className="add-paym">
            <form onSubmit={handleSubmit}>
                <h2>Payment Form</h2>
                <label>Customer Name:</label>
                <input type="text" id="c_name" name="c_name" value={formData.c_name} onChange={handleOnChange} /><br />
                <label>Email:</label>
                {/* <input type="text" id="email" name="email" value={Email}  /><br /> */}
                <input type="text" id="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} /><br/>

                <label>Card Number:</label>
                <input type="number" id="card_number" name="card_number" value={formData.card_number} onChange={handleOnChange} /><br />
                <label>Cvc:</label>
                <input type="number" id="cvc" name="cvc" value={formData.cvc} onChange={handleOnChange} /><br />
                <label>Card Expiration:</label>
                <input type="date" id="card_expiration" name="card_expiration" value={formData.card_expiration} onChange={handleOnChange} /><br />
                
                {error && <div className="error">{error}</div>}
                <button id="addbtn">Add Payment</button>
            </form><br />
        </div>
    );
}

export default AddPayment;




/*import React from "react";
import usePayment from "../hooks/usePayment";

const AddPayment = ()  =>  {
    const { order, handleOnChange, handleSubmit } = usePayment();

    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch("http://localhost:4000/kitchenStock/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Failed to add order");
            }

            // Send thank you email
            await fetch("http://localhost:8030/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: formData.email }),
            });

            console.log("Thank you email sent to:", formData.email);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div>
        <div className="d-flex align-items-center justify-content-center mb-3 mt-5">
            <form onSubmit={(e) => handleSubmit(handleFormSubmit)(e)} method="Post" style={{ width: "18rem" }}>
                <h2>Payment Form</h2>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Customer Name:</label>
                <input type="text" id="c_name" name="c_name" value={order.c_name} onChange={handleOnChange} /><br />
                </div>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Email:</label>
                <input type="text" id="email" name="email" value={order.email} onChange={handleOnChange} /><br />
                </div>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Card Number:</label>
                <input type="text" id="card_number" name="card_number" value={order.card_number} onChange={handleOnChange} /><br />
                </div>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Cvc:</label>
                <input type="text" id="cvc" name="cvc" value={order.cvc} onChange={handleOnChange} /><br />
                </div>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Card Expiration:</label>
                <input type="text" id="card_expiration" name="card_expiration" value={order.card_expiration} onChange={handleOnChange} /><br />
                </div>
                <div className="mb-3">
                <label htmlFor="productName" className="form-label">Date:</label>
                <input type="date" id="date" name="date" value={order.date} onChange={handleOnChange} /><br />
                </div>

                <button type="submit" className="btn btn-primary" id="submit">Add Payment</button>
            </form><br />
           
        </div>
        </div>
    );
}

export default AddPayment;
import { useState } from "react";
import axios from "axios";
import './addpay.css'


function AddPayment(){
    const [order,setorder]=useState({
        c_name:"",
    email:"",
    card_number:"",
    cvc:"",
 card_expiration:"",
  
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit = async (e) => {
        e.preventDefault();
      
        try {
          const data = await axios.post("http://localhost:4000/payment/create_payment", order);
          console.log("Order added to cart:", data);
      
          // Send thank you email
          await axios.post("http://localhost:4000/payment/send-email", { email: order.email });
          console.log("Thank you email sent to:", order.email);
          
          alert("Order added to Cart!");
        } catch (error) {
          console.error("Error adding order or sending email:", error);
          alert("An error occurred while processing your request. Please try again later.");
        }
      };
    


    return(
        <div className="add-paym">
        

    <form onSubmit={handlesubmit}>
    <h2>Payment Form</h2>
    <lable>Customer Name:</lable>
    <input type="text" id="c_name" name="c_name" onChange={handleonchange}/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleonchange}/><br></br>
    <lable>Card Number:</lable>
    <input type="number" id="card_number" name="card_number" onChange={handleonchange}/><br></br>
    <lable>Cvc:</lable>
    <input type="number" id="cvc" name="cvc" onChange={handleonchange}/><br></br>
    <lable>Card Expiration:</lable>
    <input type="date" id="card_expiration" name="card_expiration" onChange={handleonchange}/><br></br>
 

  
    <button id="addbtn">Add Payment</button>
    </form><br></br> 


        </div>
    )
}
export default AddPayment;*/