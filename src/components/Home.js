import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
const Home = () => {
  const productArray=[...Array(20)].map(()=>({
    id:faker.string.uuid(),
    pname:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.urlLoremFlickr({ category: 'fashion' })
 
  }))

  const [products]=useState(productArray)
  console.log(productArray);
  return (
      <div className='productContainer'>
         
      </div>

  )
}

export default Home