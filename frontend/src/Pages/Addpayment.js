import { usePaymentSubmission } from '../hooks/usePayment';
import { useFormState } from '../hooks/usePayment';
import useAddRoomReserve from '../hooks/useAddRoomReserve';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import React, { useState } from 'react';


function AddPayment() {
    const { addRoomReserve, isLoading, error } = useAddRoomReserve();
    const location = useLocation();
    const { checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno} = location.state;
    const {user}=useAuthContext()
    const [Email, setEmail] = useState(user ? user.email : '');
    const { formData, handleOnChange } = useFormState({
        c_name: "",
        email: Email,
        card_number: "",
        cvc: "",
        card_expiration: "",
    });

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    console.log('Check-in Date:', checkinDate);
    console.log('Check-out Date:', checkoutDate);
    console.log('Number of Guests:', guests);
    console.log('Number of id:', roomId);
    console.log('Number of name:', name);
    console.log('Number of email:', email);
    console.log('Number of address:', Address);
    console.log('Number of no:', phoneno);

    const { submitOrder, sendThankYouEmail } = usePaymentSubmission();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await submitOrder(formData);
            if (response.ok) {
                console.log("Order added to cart:", await response.json());
                addRoomReserve(checkinDate, checkoutDate, guests,roomId, name, email, Address, phoneno);
                // await sendThankYouEmail(formData.email);
                console.log("Thank you email sent to:", formData.email);
                alert("Order added to Cart!");


            } else {
                throw new Error("Failed to add order");
            }
        } catch (error) {
            console.error("Error adding order or sending email:", error);
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
                <input type="text" id="email" name="email" value={Email}  /><br />
                <label>Card Number:</label>
                <input type="number" id="card_number" name="card_number" value={formData.card_number} onChange={handleOnChange} /><br />
                <label>Cvc:</label>
                <input type="number" id="cvc" name="cvc" value={formData.cvc} onChange={handleOnChange} /><br />
                <label>Card Expiration:</label>
                <input type="date" id="card_expiration" name="card_expiration" value={formData.card_expiration} onChange={handleOnChange} /><br />
                <button id="addbtn">Add Payment</button>
              </form><br />
        </div>
    );
}

export default AddPayment;