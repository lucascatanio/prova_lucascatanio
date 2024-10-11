import React from 'react'
import NavBarra from '../components/NavBarra';
import ProductsListComp from '../components/ProductsListComp';

const url = "http://localhost:5000/produtos";

const ProductsList = () => {
  return (
    <div style={{ backgroundColor: "#b8f5b5", width: "100vw", height: "100vh" }}>
      <NavBarra />
      <ProductsListComp/>
    </div>
  )
}

export default ProductsList