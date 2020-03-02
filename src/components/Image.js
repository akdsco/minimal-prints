import React, {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

// TODO update .json file with alt property for each image, add few more photos

function Image({className, img}) {
  const [isHovered, ref] = useHover();
  const {toggleFavourite, addToCart, cartItems, removeFromCart} = useContext(Context);
  const imageSize = typeof className === 'undefined' ? '' : className;

 function heartIcon(func) {
   if(img.isFavourite) {
     return <i className='ri-heart-fill favourite' onClick={func}/>;
   } else if(isHovered) {
     return <i className='ri-heart-line favourite' onClick={func}/>
   }
 }

 function cartIcon() {
   const isInCart = cartItems.some(item => item.id === img.id);
   if(isInCart) {
     return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)} />
   } else if(isHovered) {
     return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}/>
   }
 }

  return(
    <div
      ref={ref}
      className={`${imageSize} image-container`}
    >
      <img
        alt=''
        src={img.url}
        className="image-grid"
      />
      {heartIcon(() => toggleFavourite(img.id))}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool
  })
};

export default Image;