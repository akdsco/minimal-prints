import React, {useContext, useState} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types"
import useHover from "../hooks/useHover";

function CartItem({item}) {
  const [isBinIconHovered, ref] = useHover(false);
  const {removeFromCart} = useContext(Context);

  const binIconClassName = isBinIconHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

  return(
    <div className="cart-item">
      <i className={binIconClassName}
         ref={ref}
         onClick={() => removeFromCart(item.id)}
      />
      <img src={item.url} width="130px" alt="" />
      <p>£4.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem