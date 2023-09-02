import { Product } from '@prisma/client'

import React from 'react'

type TProduct = {
    product: Product
}

const SideNav = ({product}: TProduct) => {

    const products = product.category
    // const categories = [...products]
    // console.log(product)
    // const cat = new Set(categories)

    // const arr = 

    // const categories = Object.keys(product)
    // console.log(product.category);     
    
  return (
        <ul>
            {product.category}
        </ul>
  )
}

export default SideNav