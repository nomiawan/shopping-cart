import React from "react"
import { useCartContext } from "../../context/cart_context";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Wrapper } from "./CartIconStyle";

const CartIcon = () => {

  const { total_item } = useCartContext();

  return (
    <Wrapper>
      <NavLink to="/cart" className="cart-trolley--link">
        <FiShoppingCart className="cart-trolley" />
        <span className="cart-total--item">{total_item}</span>
      </NavLink>
    </Wrapper>
  )
}

export default CartIcon