'use client'

import Image from 'next/image'
import { useState } from 'react'

const Banner = ({ product }: any) => {

  // const product = allProducts

  const [currentIndex, setCurrentIndex] = useState(1)
  // console.log(product[0].thumbnail)

  // const pro = allProducts.products[currentIndex]
  // console.log(pro)

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <section className="lg:w-[80%] p-6 w-full">
      <div className="bg-[#8EC1D6] rounded text-white">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[26rem] lg:py-8 md:flex-row md:items-center ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The best Apple Watch apps</h1>
              {/* <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p> */}
              <div className="mt-6">
                <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image className="object-contain w-full h-full max-w-2xl rounded-md" src={product[currentIndex]?.thumbnail || "unable to load image"} alt={product[currentIndex]?.title} width={800} height={800} priority />
          </div>
          
        </div>
        <div className="flex justify-center order- mt-6 lg:mt-0 lg:space-x-3 lg:py-4 pb-4 lg:flex-ro">
            <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>
      </div>
    </section>
  )
}

export default Banner