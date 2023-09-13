"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import PriceTag from '../PriceTag';
import ProductCard from '../ProductCard';

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
<div className=" snap- flex w-ful overflow-x-scroll space-x- scrollbar-hide">
  {product.slice(5,14).map((product: any) => (
    <Link href={'/products/' + product.id} className=" flex-none cursor-pointer hover:scale-105 hover:duration-150 hover:transition-all" key={product.title}>
      <ProductCard product={product} />
    </Link>
))}
</div>
<Link href={'/products'}  className="bg-blue-500 rounded text-white px-9 py-3 flex justify-center mx-auto my-5 hover:bg-blue-700">View All Products</Link>

   

    </section>
  )
}

export default FlashSales