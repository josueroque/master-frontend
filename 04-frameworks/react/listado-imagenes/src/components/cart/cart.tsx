import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import { ICar } from "../../interfaces";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = () => {
  const { dispatch, cartState } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState<ICar[] | []>([]);
  const [total, setTotal] = React.useState<number>(0);
  React.useEffect(() => {
    setCartItems(
      cartState.carsList.filter((carItem: ICar) =>
        cartState.selectedItems.includes(carItem.id)
      )
    );
    setTotal(
      cartState.carsList
        .filter((item: ICar) => cartState.selectedItems.includes(item.id))
        .reduce((prevValue: number, currentValue: ICar) => {
          return prevValue + currentValue.price;
        }, 0)
    );
  }, [cartState]);

  const handleDelete = (id: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <div className="cart-container">
      <div>
        <ShoppingCartIcon /> <span className="cart-title">Cart</span>
      </div>
      {Array.isArray(cartItems) &&
        cartItems.map((item: ICar) => (
          <div key={item.id} className="cart-item-container">
            <div className="cart-image-container">
              <img src={item.image.url} alt="NotFound"></img>
            </div>
            <div className="cart-item-text">
              <h4>{item.image.title}</h4>
            </div>
            <IconButton
              aria-label="delete"
              onClick={(e) => handleDelete(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      <h4> {`Total: $${total}`} </h4>
    </div>
  );
};

export default Cart;
