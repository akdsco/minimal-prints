import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

export default function Cart() {
  const [orderButtonText, setOrderButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const totalCost = 4.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-UK", {style: "currency", currency: "GBP"});

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    if(cartItems.length > 0) {
      setOrderButtonText("Ordering.. ");
      let itemsBought = "You bought picture";
      setTimeout(() => {
        if (cartItems.length === 1) {
          itemsBought = itemsBought + ' ' + cartItems[0].id
        } else if (cartItems.length > 1) {
          itemsBought = itemsBought + 's ' + cartItems.map(item => item.id);
        }
        emptyCart();
        setOrderButtonText("Place Order");
        console.log(itemsBought);
      }, 3000);
    }
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0 ?
        <div className="order-button">
          <button onClick={placeOrder}>{orderButtonText}</button>
        </div> :
        <p>You have no items in your cart.</p>
      }
    </main>
  )
}