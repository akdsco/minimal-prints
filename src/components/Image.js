import React, {useContext, useState} from "react";
import {Context} from "../Context";
import PropTypes from 'prop-types';

// TODO update .json file with alt property for each image, add few more photos

function Image({className, img}) {
  const [isHovered, setIsHovered] = useState(false);
  const {toggleFavourite, addToCart} = useContext(Context);
  const imageSize = typeof className === 'undefined' ? '' : className;

 function heartIcon(func) {
   if(img.isFavourite) {
     return <i className='ri-heart-fill favourite' onClick={func}/>;
   } else if(isHovered) {
     return <i className='ri-heart-line favourite' onClick={func}/>
   }
 }

  const cartIcon = isHovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}/>;

  return(
    <div
      className={`${imageSize} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        alt=''
        src={img.url}
        className="image-grid"
      />
      {heartIcon(() => toggleFavourite(img.id))}
      {cartIcon}
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