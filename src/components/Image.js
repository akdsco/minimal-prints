import React from "react";

// TODO update .json file with alt property for each image, add few more photos

export default function Image({className, img}) {

  const imageClassName = typeof className === 'undefined' ? '' : className;

  return(
    <div className={`${imageClassName} image-container`}>
      <img alt='' src={img.url} className="image-grid" />
    </div>
  )
}