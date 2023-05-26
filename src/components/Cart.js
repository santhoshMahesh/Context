import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import SingleProduct from './SingleProduct'
import  {CartState}  from '../Context'

export const Cart = () => {
  const [total,setTotal]=useState(0)
  
  const {cart,setCart}=CartState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>Number(acc)+Number(curr.price),0))
  },[])
  
  return (
      <div>
        <span style={{fontSize:30}}>My Cart</span>
        <br />
        <div className='total' style={{fonstSize:30}}><h1>{total}</h1></div>
        <div className='productContainer'>
        {  
          cart.map((product)=>(
              <SingleProduct key={product.id} prop={product} cart={cart} setCart={setCart}/>
          ))
        }
   </div>
      </div>
  )
}

export default Cart