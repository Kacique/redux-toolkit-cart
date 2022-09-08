import React from "react";
import CartItems from "./CartItems";

import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

import { useSelector, useDispatch } from "react-redux";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">Is Currently Empty</h4>
      </header>
    </section>;
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            //onClick dispatch an action
            dispatch(openModal());
          }}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
