import { useState, useEffect } from "react";

const useHallData = (id) => {
  const [hallData, setHallData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [priceError, setPriceError] = useState("");

  useEffect(() => {
    const fetchHall = async () => {
      try {
        const response = await fetch(`http://localhost:4000/hall/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch hall");
        }
        const data = await response.json();
        setHallData(data);
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
    if (name === "capacity") {
      if (value < 1 || value > 300) {
        setErrorMessage("Capacity must be between 1 and 300");
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
    }
    setHallData({ ...hallData, [name]: value });
    const newValue =
      name === "facilities" ? value.split(",").map((item) => item.trim()) : value;
    setHallData({ ...hallData, [name]: newValue });
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

    const confirmed = window.confirm("Are you sure you want to make changes?");

    if (!confirmed) {
      return;
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
  };
};

export default useHallData;
