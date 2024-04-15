import React, { useState } from 'react';
import useMenuList from '../hooks/useMenu';

const MenuByCategoryPage = () => {
  const [category, setCategory] = useState('all'); // State to store the selected category
  const { menuList, isLoading, error } = useMenuList(category);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='mt-3 mb-2'>
        {/* Dropdown for selecting category */}
        <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
          <h3>Select Category</h3>
          <option value="All">Select Category</option>
          <option value="Srilankan">Srilankan</option>
          <option value="Burgers and Sandwiches">Burgers and Sandwiches</option>
          <option value="Chinese">Chinese</option>
          <option value="Pizzas and pasta">Pizzas and pasta</option>
          <option value="Cakes">Cakes</option>
          <option value="Desserts">Desserts</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className='card'>
        {menuList.map((item) => (
          <div className='card' key={item._id}>
            <h3>{item.productName}</h3>
            <p>Price: Rs.{item.Price}.00</p>
            <a href="/AddOrder" className="btn btn-info mb-5">
              Order Now
            </a>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuByCategoryPage;
