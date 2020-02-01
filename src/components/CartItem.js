import React, {useContext, useState} from "react";
import {Context} from "../Context";

function CartItem({item}) {
  const [isBinIconHovered, setIsBinIconHovered] = useState(false);
  const {removeFromCart} = useContext(Context);

  const binIconClassName = isBinIconHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return(
    <div className="cart-item">
      <i className={binIconClassName}
         onMouseEnter={() => setIsBinIconHovered(true)}
         onMouseLeave={() => setIsBinIconHovered(false)}
         onClick={() => removeFromCart(item.id)}
      />
      <img src={item.url} width="130px" alt="" />
      <p>£4.99</p>
    </div>
  )
}

export default CartItem