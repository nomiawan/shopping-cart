import React, { useState } from "react"
import CartAmountToggle from "../common/CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { useCartContext } from "../../context/cart_context";
import { Wrapper } from "./AddToCartStyle";

const AddToCart = ({ product }) => {

  const { addToCart } = useCartContext()
  const { id } = product
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <Wrapper>
      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to={""}
        onClick={() => addToCart(id, amount, product)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}

export default AddToCart