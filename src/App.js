import React from 'react'
import './styles.css'
import 'remixicon/fonts/remixicon.css'
import Header from "./components/Header"
import {Switch, Route} from 'react-router-dom'
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

// TODO implement local storage to keep track of cart and favourites

function App() {
  return (
    <div data-test='component-app'>
      <Header data-test='component-header' />

      <Switch>
        <Route exact path='/'>
          <Photos data-test='component-photos' />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
