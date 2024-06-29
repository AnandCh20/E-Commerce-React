import React from "react";
import Cart from "./Cart";
import "./SideBar.css"; // Import the CSS file

const SideBar = ({ cartItems, removeFromCart }) => {
  return (
    <div className="sidebar-container">
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default SideBar;
