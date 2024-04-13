
import { usePaymentSubmission } from '../hooks/usePayment';
import { useFormState } from '../hooks/usePayment';


function AddPayment() {
    const { formData, handleOnChange } = useFormState({
        c_name: "",
        email: "",
        card_number: "",
        cvc: "",
        card_expiration: "",
    });

    const { submitOrder, sendThankYouEmail } = usePaymentSubmission();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await submitOrder(formData);
            if (response.ok) {
                console.log("Order added to cart:", await response.json());
                await sendThankYouEmail(formData.email);
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
                <input type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} /><br />
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