import React, { useEffect, useState } from "react";
import "./Cards.css"; // Import the CSS file for styling

const Cards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function passed via props
  };

  return (
    <div className="cards-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.thumbnail} alt={product.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-price">₹{product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
