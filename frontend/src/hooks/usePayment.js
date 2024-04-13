import { useState } from "react";

const usePayment = () => {
    const [order, setOrder] = useState({
        c_name: "",
        email: "",
        card_number: "",
        cvc: "",
        card_expiration: "",
        
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (callback) => {
        try {
            await callback(order);
            alert("Reservation added!");
        } catch (error) {
            console.error("Error adding order or sending email:", error);
            alert("An error occurred while processing your request. Please try again later.");
        }
    };

    return { order, handleOnChange, handleSubmit };
};

export default usePayment;