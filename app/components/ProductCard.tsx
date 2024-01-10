'use client'

import Image from 'next/image'
import React, { useTransition } from 'react'
import PriceTag from './PriceTag'
import Rating from './Rating'
import { incrementProductQuantity } from '../products/action'
import Link from 'next/link'
// import { incrementProductQuantity } from '../products/action'

const ProductCard = ({ product }: any) => {
  const [isPending, startTransition] = useTransition();

  const percentageOff = (originalPrice: number, discountedPrice: number) => {
    return (( originalPrice - discountedPrice ) / originalPrice * 100).toFixed(0)


  }
  console.log(product.discountPercentage);
  

  const addToCart = (productId: string) => {
    startTransition(async () => {
      await incrementProductQuantity(productId);
    });
  }
  return (
    <Link href={`products/${product.id}`} className="relative my-4 mx-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative flex h-60 overflow-hidden rounded-xl" href="#">
        <Image width={500} height={500} className=" rounded-t-lg h-[30vh]" src={product.thumbnail} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{percentageOff(product.price, product.discountPercentage)}% OFF</span>
      </a>
      <div className=" px-3 pb-5 ">
          <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between flex-wrap">
          <p>
            <PriceTag className={`text-xl font-bold text-gray-900 dark:text-white`} price={product.price} />
            {/* <span className="text-3xl font-bold text-slate-900" price={product.price}>$449</span> */}
            <span className="text-sm text-slate-900 line-through">
              <PriceTag className='' price={product.discountPercentage} />
            </span>
          </p>
          <div className="flex items-center">
            <Rating value={product.rating} />
            {/* <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span> */}
          </div>
        </div>
        <button onClick={() => addToCart(product.id)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart
        </button>
      </div>
    </Link>

  )
}

export default ProductCard