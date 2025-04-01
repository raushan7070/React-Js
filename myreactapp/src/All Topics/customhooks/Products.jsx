import React from 'react'
import { useAPI } from './Customhooks';

const Products = () => {

    let productdata = useAPI("https://fakestoreapi.com/Products");
    let useradata = useAPI("https://fakestoreapi.com/Users");

    console.log(productdata); 
    console.log(useradata);
    
    
  return (
    <div>
      <h1> Custom hook</h1>
    </div>
  )
}

export default Products
