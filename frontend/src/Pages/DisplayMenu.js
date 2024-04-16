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

  const bufferToBase64 = (buf) => {
    var binstr = Array.prototype.map
      .call(buf, function (ch) {
        return String.fromCharCode(ch);
      })
      .join("");
    return btoa(binstr);
  };
  
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
      
      <div className="row d-flex align-items-center justify-content-around mb-3">
            {menuList.map((menu) => (
              <div key={menu._id} className="col-lg-3">
                <div className="card mb-4">
                  <div className="card-body">
                    {menu.Image && menu.Image.data && (
                      <img
                      style={{ width: "10rem" }}
                      src={`data:${
                        menu.Image.contentType
                      };base64,${bufferToBase64(menu.Image.data.data)}`}
                      className="card-img-top mb-1"
                      alt={menu.Image}
                    />
                    )}
                    <h5 className="card-title">{menu.productName}
                    </h5>
                    <p className="card-text fw-medium">
                      Rs.{menu.Price}.00
                      
                    </p>
                    <p className="card-text fw-medium">{menu.category}
                   </p>
                   <a href="/AddOrder" className="btn btn-info mb-5">
              Order Now
            </a>

                  </div>
                </div>
              </div>
            ))}

            
            {/* </div> */}
          </div>
        </div>

  );
};

export default MenuByCategoryPage;
