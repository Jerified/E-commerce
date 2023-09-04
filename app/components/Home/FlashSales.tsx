"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const FlashSales = ({product}: any) => {
  // const allProduct = allProducts.products
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timerId);
      };
    }, []);

    
    const formatTimeValue = (value: number) => {
      // Add leading zero if the value is less than 10
      return value < 10 ? `0${value}` : `${value}`;
    };
  
  
    const days = time.getDate() - 1;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

  return (
    <section className="pt-12 px-6 lg:px-0">
        <div className="flex gap-3 items-center">
            <div className="w-4 h-8 rounded-sm bg-blue-500" />
            <p className="text-blue-500 font-medium">Today&apos;s</p>
        </div>

        <div className="py-6 flex lg:gap-12 gap-4 items-center min-w-[150px">
            <h1 className="md:text-3xl text-xl font-semibold whitespace-nowrap text-end">Flash Sales</h1>
            <div className="flex gap-2 items-end">
              <div className="">
                <p className="text-xs font-medium">Days</p>
                <span className='md:text-3xl text-xl font-semibold'>{formatTimeValue(days)}  </span>
              </div>
              <span className="text-blue-500 font-semibold md:text-3xl text-xl mt-[-3rem]">:</span>
              <div className="">
              <p className="text-xs font-medium">Hours</p>
                <span className=' md:text-3xl text-xl font-semibold'>{formatTimeValue(hours)} </span>
              </div>
              <span className="text-blue-500 font-semibold  md:text-3xl text-xl">:</span>
              <div className="text-xs font-medium">
              <p className="">Min</p>
                <span className=' md:text-3xl text-xl font-semibold'>{formatTimeValue(minutes)}  </span>
              </div>
              <span className="text-blue-500 font-semibold  md:text-3xl text-xl">:</span>
              <div className="text-xs font-medium">
              <p className="">Sec</p>
                <span className=' md:text-3xl text-xl font-semibold'>{formatTimeValue(seconds)} </span>
              </div>
            </div>

        </div>

        {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 */}
<div className=" snap- flex w-ful overflow-x-scroll space-x-8 scrollbar-hide">
  {product.slice(5,14).map((product: any) => (
    <Link className="bg-whit border lg:w-fit sm:w-[30%]  h-[20rm] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-none cursor-pointer hover:scale-105 hover:duration-150 hover:transition-all" key={product.title}>
      <a href="" className='aspect-w- aspect-h-'>
          <Image width={500} height={500} className="object-cove max-w-ful rounded-t-lg h-[30vh]" src={product.thumbnail} alt="product image" />
      </a>
      <div className="px-3 py-2">
          <a href="#">
              <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
          </div>
          <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
      </div>

    </Link>
))}
</div>
<button className="bg-blue-500 rounded text-white px-9 py-3 flex justify-center mx-auto my-5 hover:bg-blue-700">View All Products</button>

   

    </section>
  )
}

export default FlashSales