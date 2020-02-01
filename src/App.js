import React from 'react';
import './styles.css'
import Header from "./components/Header";
import {Switch, Route} from 'react-router-dom'
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

// TODO implement local storage to keep track of cart and favourites

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
