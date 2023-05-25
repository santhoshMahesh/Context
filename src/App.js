import  Header  from './components/Header.js';
import {BrowserRouter, Route} from "react-router-dom"
import  Cart  from './components/Cart.js';
import  Home  from './components/Home.js';
import './app.css'
import { useState } from 'react';

function App() {

 
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
