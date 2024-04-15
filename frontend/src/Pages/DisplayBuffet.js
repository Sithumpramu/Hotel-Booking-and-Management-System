import React from 'react';
import useDisplayBuffet from '../hooks/useDisplayBuffet'

const DisplayBuffet = () => {
  const { buffetItems, isLoading, error } = useDisplayBuffet();

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
      <div className='card m-5 mt-5 mb-5'>
        {buffetItems.map((item) => (
            <div className='card '>
          <div key={item._id}>
            <h2>{item.BuffetName}</h2>
            <p>{item. Description}</p>
            <h4>from: {item.Time}</h4>
            <h4>Price: Rs.{item.Price}.00</h4>
            {/* Add more details as needed */}
          </div></div>
        ))}
      </div>
    </div>
  );
};

export default DisplayBuffet;
