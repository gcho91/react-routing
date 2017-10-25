import React from 'react';
import './App.css';

import Nav from './Nav/Nav';
import Cart from './Cart/Cart';

import  Router from '../router.js';

export default function App() {
  return (
    <div>
      <Nav />
      <div id="App__mainContainer">
        <div id="App__routerContainer">
          { Router }
          <Cart />

        </div>
      </div>
    </div>
  )
}



//Step3 modify App.js to render router onto the DOM
