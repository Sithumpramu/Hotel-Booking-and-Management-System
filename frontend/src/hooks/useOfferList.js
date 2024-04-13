import { useEffect, useState } from "react"

const offerList = () => {
    const [offers, setOffer] = useState([]);
  
    useEffect(() => {
      const fetchRoom = async () => {
        try {
          const response = await fetch("http://localhost:4000/offer/getOffer");
          if (!response.ok) {
            throw new Error("Failed to fetch offer");
          }
          const json = await response.json();
          setOffer(json);
        } catch (error) {
          console.error("Error fetching offers data:", error);
        }
      };
      fetchOffer();
    }, []);

    return {offers};
};

export default offerList;