// src/components/ProductListing.js

import React, { useState } from 'react';
import './ProductListing.css'; // You can add CSS for styling here

const products = [
  {
    id: 1,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/sanitizer_bottle_WoodNight_grey-background_1b30f122-5917-48fd-82e4-ca7ee61cd31d.jpg?v=1693478548&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/0013__CS_7336_73361324.jpg?v=1693478548',
    status: 'In stock'
  },
  {
    id: 2,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Mouth_Spray_Familia_grey_1.jpg?v=1708096699&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/files/Mouth_Spray_Apple_front_grey_7f552d5a-cb2d-4d5e-8ae6-4ea7eace46ed.jpg?v=1708096699&width=360',
    status: 'In stock'
  },
  {
    id: 3,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/01_10.jpg?v=1675941436&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 4,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/083_67640df6-8852-4c7b-9be2-0c356c0a4422.jpg?v=1676287392&width=360',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/083_67640df6-8852-4c7b-9be2-0c356c0a4422.jpg?v=1676287392&width=360', 
    status: 'Sold Out'
  },
  {
    id: 5,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Refill_HZ_BE_BrightRose.jpg?v=1686050013&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/095_b0a6ccb6-a59c-47fb-9298-39556bed295a.jpg?v=1686050013&width=360',
    status: 'In stock'
  },
  {
    id: 6,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/Pack3_SA_MF.jpg?v=1678874635&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/Pack3_SA_MF.jpg?v=1678874635&width=713',
    status: 'In stock'
  },
  {
    id: 7,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/Pocket_SA_MF_WildOrchid_5052f880-3d50-4442-82d2-e3c4eebc8159.jpg?v=1678356511&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 8,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Travel_bottle_SPF30_grey.jpg?v=1693476693&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 9,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/051.jpg?v=1651510170&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 10,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/sanitizer_bottle_brightrose_grey-background.jpg?v=1693478149&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 11,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/sanitizer_bottle_Lavanda_grey-background_49f8cd18-6548-4a22-825c-81859d683bea.jpg?v=1693478355&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 12,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Refill_HZ_BE_SoothingLavender.jpg?v=1686049980&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 13,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Mouth_Spray_Life_front_grey.jpg?v=1703010992&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 14,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/Mouth_Spray_Good_front_grey.jpg?v=1703010958&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 15,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/files/SPF30_bottle_FaceCream_grey.jpg?v=1693476294&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'In stock'
  },
  {
    id: 16,
    name: 'Hand Sanitizer Wood Night',
    rating: '* * * * *',
    price: '8,90 €',
    imgSrc: 'https://haanready.com/cdn/shop/products/01_8.jpg?v=1675941106&width=713',
    hoverImgSrc: 'https://haanready.com/cdn/shop/products/02_17.jpg?v=1677661597',
    status: 'Sold out'
  },
];

const ProductListing = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const productsPerPage = 8;

  // Filter products based on the selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === 'All') return true;
    if (filter === 'In stock') return product.status === 'In stock';
    if (filter === 'Sold Out') return product.status === 'Sold Out';
    return true;
  });

  // Calculate the total number of pages for the filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products for the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setFilter(filter);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(cart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      ));
    }
  };

  // Handle errors
  const handleError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3000); // Hide error after 3 seconds
  };

  return (
    <div>
      <CartIcon cart={cart} />
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('In stock')} className={filter === 'In stock' ? 'active' : ''}>In stock</button>
        <button onClick={() => handleFilterChange('Sold Out')} className={filter === 'Sold Out' ? 'active' : ''}>Sold Out</button>
      </div>

      <div className="product-listing">
        {currentProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <img
              src={hoveredProductId === product.id ? product.hoverImgSrc : product.imgSrc}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.rating}</p>
            <p>{product.price}</p>
            {product.status === 'Sold Out' ? (
              <button disabled>Sold Out</button>
            ) : (
              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            )}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageClick}
      />

      <Cart
        cart={cart}
        onQuantityChange={handleQuantityChange}
        error={error}
        handleError={handleError}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageClick }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageClick(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

const Cart = ({ cart, onQuantityChange, error, handleError }) => {
  const handleIncrement = (product) => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity === 1) {
      handleError('Quantity cannot be less than 1');
    } else {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  const handleRemove = (product) => {
    onQuantityChange(product.id, 0);
  };

  return (
    <div className="cart">
      <h2>Your cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imgSrc} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button onClick={() => handleRemove(item)} className="remove-button">Remove</button>
              </div>
              <p>{(parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2)} €</p>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const CartIcon = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-icon">
      <img src="path_to_cart_image.png" alt="Cart" />
      <span>{totalItems}</span>
    </div>
  );
};

export default ProductListing;