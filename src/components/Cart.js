import React from "react";
import "./Cart.css"; // Import the CSS file for styling

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">${item.price}</span>
                </div>
                <button
                  className="removebtn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ⛔
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
