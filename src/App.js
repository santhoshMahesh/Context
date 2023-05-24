import  Header  from './components/Header.js';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  Cart  from './components/Cart.js';
import  Home  from './components/Home.js';
import './app.css'
import { useState } from 'react';

function App() {
 const [cart,setCart]=useState([]);
 
  return (
    <BrowserRouter>
       <Header/>
        <div className='App'>
       <Routes>
          <Route path='/' Component={()=><Home cart={cart} setCart={setCart}/>}>
          </Route> 
          <Route path='/Cart' Component={()=><Cart cart={cart} setCart={setCart}/>}/>
       </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
