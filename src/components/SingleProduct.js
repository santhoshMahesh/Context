import React from 'react'

const SingleProduct = ({prop}) => {
  return (
    <div className='products'>
      <img src={prop.image} alt={prop.pname}/>
      <div className='productDesc'>
        <span style={{fontWeight:700}}>{prop.pname}</span>
        <span>₹ {prop.price.substring(0,3)}</span>
      </div>
      <button className='add'>Add to Cart</button>
    </div>
  )
}


export default SingleProduct;
