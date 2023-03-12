import React from "react"
import { useCartContext } from "../../context/cart_context"
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import FormatPrice from "../../Helpers/FormatPrice";
import { EmptyDiv, Wrapper } from "./CartStyle";

const Cart = () => {
  const { cart, total_price } = useCartContext()

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item</h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="view-cart-heading">
          <h2>View Cart</h2>
        </div>
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>

        <hr />

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>order total</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cart