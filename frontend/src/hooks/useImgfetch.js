import React, { useState, useEffect } from 'react';

const useImageFetch = (imageName) => {
  const [image, setImage] = useState([]);

  useEffect(() => {

    const fetchImage = async (imageIndex) => {
      try {
        const response = await fetch(`http://localhost:4000/hotel/images/${imageName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const imageData = await response.json();
        setImage(imageData.image);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

      fetchImage();
  }, []);
  return image
}
  export default useImageFetch;