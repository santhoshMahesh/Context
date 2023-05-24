import React from 'react'
import './style.css'
import SingleProduct from './SingleProduct'
export const Cart = ({cart,setCart}) => {
  return (
      <div>
        <span style={{fontSize:30}}>My Cart</span>
        <br />
        <span style={{fonstSize:30}}>Total</span>
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