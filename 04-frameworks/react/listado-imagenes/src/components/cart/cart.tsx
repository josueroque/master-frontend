import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Cart = () => {
  return (
    <div className="cart-container">
      <div className="icon-container">
        <span className="cart-title">Cart</span> <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Cart;
