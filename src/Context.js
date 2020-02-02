import React, {useState, useEffect} from 'react'

const Context = React.createContext(undefined, undefined);

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url = 'https://raw.githubusercontent.com/akdsco/minimal-prints-img/master/images.json';

  useEffect(() => {
    fetch(url)

      .then(res => res.json())
      .then(data => setAllPhotos(data));
  },[]);

  function toggleFavourite(id) {
    const updatedAllPhotos = allPhotos.map(photo => {
      if(photo.id === id) {
        return {...photo, isFavourite: !photo.isFavourite}
      }
      return photo;
    });
    setAllPhotos(updatedAllPhotos);
  }

  function addToCart(newCartItem){
    setCartItems(prevState => [...prevState, newCartItem])
  }

  function removeFromCart(id) {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return(
    <Context.Provider
      value={{
        allPhotos,
        toggleFavourite,
        cartItems,
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