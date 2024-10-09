import React from 'react'
import ProductsLoadingCard from './Loading'

const ProductsLoader = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard />
      <ProductsLoadingCard/>
    </div>
  )
}

export default ProductsLoader
