import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAddOffer = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addOffers = async (
    offerID,
    offerName,
    Date,
    description, 
    ImageFile
  ) => {

    setIsLoading(true);
    setError(null);

    console.log(ImageFile,"file")

    const formData = new FormData();
    formData.append("offerID", offerID);
    formData.append("offerName", offerName);
    formData.append("Date", Date);
    formData.append("description", description);
    if (ImageFile) {
      formData.append("Image", ImageFile);
    }

    try {
      const response = await fetch("http://localhost:4000/offer/addOffer", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        navigate("/Offers");
        alert("Offer Added successfully");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { addOffers, isLoading, error };
};

export default useAddOffer;