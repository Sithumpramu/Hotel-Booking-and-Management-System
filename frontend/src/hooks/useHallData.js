import { useState, useEffect } from "react";

const useHallData = (id) => {
  const [hallData, setHallData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [priceError, setPriceError] = useState("");
  const [originalHallData, setOriginalHallData] = useState(null); // Define original hall data
  const [successMessage, setSuccessMessage] = useState(""); // Define success message

  useEffect(() => {
    const fetchHall = async () => {
      try {
        const response = await fetch(`http://localhost:4000/hall/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch hall");
        }
        const data = await response.json();
        setHallData(data);
        setOriginalHallData(data); // Store the initial hall data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hall data:", error);
        setLoading(false);
      }
    };
    fetchHall();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let capacityConstraint = 500;
    if (id === "6609fbe5b406cd8830d34293") {
      capacityConstraint = 200; // Update capacity constraint
    }
    if (name === "capacity") {
      const numericValue = parseInt(value); // Parse value as an integer
      if (isNaN(numericValue) || numericValue <= 0 || numericValue > capacityConstraint) {
        setErrorMessage(`Capacity must be between 1 and ${capacityConstraint}`);
        return;
      } else {
        setErrorMessage("");
      }
        
     
    } else if (name === "price") {
      if (value < 0) {
        setPriceError("Price cannot be negative");
        return;
      } else {
        setPriceError("");
      }
    }else if (name === "facilities") {
      // Split the input value by comma and trim whitespace
      const facilitiesArray = value.split(",").map(item => item.trim());
      setHallData(prevHallData => ({
        ...prevHallData,
        [name]: facilitiesArray
      }));
    } else {
      setHallData(prevHallData => ({
        ...prevHallData,
        [name]: value
      }));
    }

    setShowNotification(true);

   
  };

  const handlePriceChange = (amount) => {
    const newPrice = parseFloat(hallData.price) + amount;
    if (newPrice < 0) {
      setPriceError("Price cannot be negative");
      return;
    } else {
      setPriceError("");
    }
    setHallData({ ...hallData, price: newPrice });
    setShowNotification(true);
  };

  const handlePictureUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("picture", file);

      const response = await fetch(
        `http://localhost:4000/hall/update/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload picture");
      }

      console.log("Picture uploaded successfully");
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    } catch (error) {
      console.error("Error uploading picture:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   console.log(originalHallData)
    const isDataChanged = JSON.stringify(hallData) !== JSON.stringify(originalHallData);

    if (!isDataChanged) {
      // No changes were made
      setSuccessMessage("No changes were made.");
      setShowNotification(true);
      return; // Exit early
    }

    try {
      const response = await fetch(`http://localhost:4000/hall/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hallData),
      });
      if (!response.ok) {
        throw new Error("Failed to update hall");
      }
      console.log("Hall updated successfully");
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    } catch (error) {
      console.error("Error updating hall:", error);
    }
    
  };
  

  return {
    hallData,
    loading,
    showNotification,
    errorMessage,
    priceError,
    handleInputChange,
    handlePriceChange,
    handlePictureUpload,
    handleSubmit,
    setShowNotification,
    successMessage, // Add successMessage to the return object
  };
};

export default useHallData;
