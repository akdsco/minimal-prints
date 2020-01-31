import React, {useContext, useState} from "react";
import {Context} from "../Context";

// TODO update .json file with alt property for each image, add few more photos

export default function Image({className, img}) {
  const [isHovered, setIsHovered] = useState(false);
  const {toggleFavourite} = useContext(Context);
  const imageSize = typeof className === 'undefined' ? '' : className;

  const heartIcon = isHovered &&
    <i onClick={() => toggleFavourite(img.id)} className={`ri-heart-${img.isFavorite ? 'fill' : 'line'} favorite`}/>;
  const cartIcon = isHovered && <i className="ri-add-circle-line cart"/>;

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
      {heartIcon}
      {cartIcon}
    </div>
  )
}