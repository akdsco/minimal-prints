import {useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"

function useHover(init) {
  const[hovered, setHovered] = useState(init);
  const hoverRef = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() =>{
    hoverRef.current.addEventListener('mouseenter', enter);
    hoverRef.current.addEventListener('mouseleave', leave);

    return () => {
      hoverRef.current.removeEventListener('mouseenter', enter);
      hoverRef.current.removeEventListener('mouseleave', leave);
    }
  },[]);

  return [hovered, hoverRef]
}

useHover.propTypes = {
  init: PropTypes.bool.isRequired
};

export default useHover;