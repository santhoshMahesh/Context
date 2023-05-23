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

  const [products]=useState(productArray)
  console.log(productArray);
  return (
      <div className='productContainer'>
      
         {  
            products.map((product)=>(
                <SingleProduct prop={product}/>
            ))
          }
      </div>
  )
}

export default Home