import React, { useContext, useState } from 'react'
import { CartState } from '../Context';


const SingleProduct = ({prop}) => {
 
  const {cart,setCart}=CartState();

  return (
    <div className='products'>
      <img src={prop.image} alt={prop.pname}/>
      <div className='productDesc'>
        <span style={{fontWeight:700}}>{prop.pname}</span>
        <span>₹ {prop.price.substring(0,3)}</span>
      </div>
   
     {cart.includes(prop)?
      (<button className='add' onClick={()=>{
        setCart(cart.filter(c=>c.id!==prop.id))
      }}> Remove From Cart
      </button>):
      (
      <button className='add' onClick={()=>{
        setCart([...cart,prop])
      }}>Add to Cart
      </button>
      )
    }
    
    </div>
  )
}


export default SingleProduct;
