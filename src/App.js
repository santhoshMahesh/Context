import  Header  from './components/Header.js';
import {BrowserRouter, Route} from "react-router-dom"
import  Cart  from './components/Cart.js';
import  Home  from './components/Home.js';
import './app.css'
import { useState } from 'react';

function App() {
 const [cart,setCart]=useState([]);
 
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Route path="/" exact>
        <Home  cart={cart} setCart={setCart}/>
      </Route>
      <Route path="/cart">
        <Cart cart={cart} setCart={setCart}/>
      </Route>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
