// MenuByCategoryPage.js

import React from 'react';
import useMenuList from '../hooks/useMenu'

const MenuByCategoryPage = ({ category }) => {
  const { menuList, isLoading, error } = useMenuList(category);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

//   // Define category-specific details
//   let categoryDetails = {};
//   if (category === 'drinks') {
//     categoryDetails = {
//       title: 'Drinks Menu',
//       description: 'Explore our wide selection of refreshing beverages.'
//     };
//   } else if (category === 'appetizers') {
//     categoryDetails = {
//       title: 'Appetizers Menu',
//       description: 'Start your meal with our delicious appetizers.'
//     };
//   }
  // Add more category-specific details as needed

  return (
    <div>
      {/* <h2>{categoryDetails.title}</h2>
      <p>{categoryDetails.description}</p> */}
      <div className='card'>
        {menuList.map((item) => (
            <div className='card'>
          <div key={item._id}>
            <h3>{item.productName}</h3>
            <p>Price: Rs.{item.Price}.00</p>
            {/* Add more details as needed */}
          </div></div>
        ))}
      </div>
    </div>
  );
};

export default MenuByCategoryPage;
