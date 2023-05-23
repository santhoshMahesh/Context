import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct.js'

faker.seed(100);
const Home = () => {
  const productArray=[...Array(30)].map(()=>({
    id:faker.string.uuid(),
    pname:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.urlLoremFlickr({ category: 'cats' })
 
  }))

  const [cart,setCart]=useState([]);
  const [products]=useState(productArray)
  
  console.log(cart)
  


  return (
      <div className='productContainer'>
      
         {  
            products.map((product)=>(
                <SingleProduct key={product.id} prop={product} cart={cart} setCart={setCart}/>
            ))
          }
      </div>
  )
}

export default Home