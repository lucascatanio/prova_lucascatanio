import React from 'react'
import NavBarra from '../components/NavBarra';
import ProductAddForm from '../components/ProductAddForm';

const ProductAdd = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "#b8f5b5" }}>
      <NavBarra />
      <ProductAddForm />
    </div>
  )
}

export default ProductAdd