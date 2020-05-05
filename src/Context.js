import React, {useState, useEffect} from 'react'

// Setup unsplash API object to serve images
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_KEY
});

const Context = React.createContext(undefined, undefined);

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url = 'https://raw.githubusercontent.com/akdsco/minimal-prints-img/master/images.json';
  const unsplashData = [];

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data));

    unsplash.search.photos("minimal", 1, 25)
      .then(res => res.json()).then(data => {
        data.results.forEach(photo => {
          let photoObject = {
            "url": photo.urls.small,
            "urlFullSize": photo.urls.raw,
            "id": photo.id,
            "isFavourite": false
          };
          unsplashData.push(photoObject);
        });
        setAllPhotos(prevState => prevState.concat(unsplashData));
      })
  },[]);

  /**
   * @function updates supplied photos favourite status and changes state accordingly
   * @param {string} id - photo identifier
   */

  function toggleFavourite(id) {
    const updatedAllPhotos = allPhotos.map(photo => {
      if(photo.id === id) {
        return {...photo, isFavourite: !photo.isFavourite}
      }
      return photo;
    });
    setAllPhotos(updatedAllPhotos);
  }

  /**
   * @function adds newItem to a cart
   * @param newCartItem
   */

  function addToCart(newCartItem){
    setCartItems(prevState => [...prevState, newCartItem])
  }

  /**
   * @function removes item from a cart
   * @param id - uses id to verify item to be removed
   */

  function removeFromCart(id) {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  }

  /**
   * @function empties the cart
   */

  function emptyCart() {
    setCartItems([]);
  }

  return(
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavourite,
        addToCart,
        removeFromCart,
        emptyCart
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}