import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
   const {cartItems, total, amount} = useSelector((store) => store.cart);
   const dispatch = useDispatch();

   // Cart is empty
   if (amount < 1) {
      return (
         <section className="cart">
            <header>
               <h2>Your Bag</h2>
               <h4 className="empty-cart">is current empty</h4>
            </header>
         </section>
      )
   }

   return (
      <section className="cart">
         <header>
            <h2>Your Bag</h2>
         </header>
         <div>
            {cartItems.map(item => <CartItem key={item.id} {...item} />)}
         </div>
         <footer>
            <hr />
            <div className="cart-total">
               <h4>
                  Total <span>${total.toFixed(2)}</span>
               </h4>
            </div>
            <button className="btn clear-btn" onClick={() => dispatch(openModal())}>Clear Cart</button>
         </footer>
      </section>
   )

}

export default CartContainer;