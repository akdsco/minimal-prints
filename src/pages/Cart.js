import React, {useContext, useState} from "react"
import {Context} from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const [orderButtonText, setOrderButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const totalCost = 4.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-UK", {style: "currency", currency: "GBP"});

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    let itemsBought = 'Shopping cart is empty, try loading it up';

    if(cartItems.length > 0) {
      setOrderButtonText("Ordering.. ");
      setTimeout(() => {
        if (cartItems.length === 1) {
          itemsBought = 'You bought picture ' + cartItems[0].id
        } else if (cartItems.length > 1) {
          itemsBought = 'You bought pictures ' + cartItems.map(item => item.id);
        }
        emptyCart();
        setOrderButtonText("Place Order");
        console.log(itemsBought);
      }, 3000);
    } else {
      console.log(itemsBought);
    }

  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{orderButtonText}</button>
      </div>
    </main>
  )
}