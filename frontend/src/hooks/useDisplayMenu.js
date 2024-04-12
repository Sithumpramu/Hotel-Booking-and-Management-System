// useMenuByCategory.js

import { useState, useEffect } from 'react';

const useMenuByCategory = (Category) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuByCategory = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/menu/${Category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch menu items by category');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuByCategory();
  }, [Category]);

  return { menuItems, isLoading, error };
};

export default useMenuByCategory;
