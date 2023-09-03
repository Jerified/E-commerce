import React from 'react'
import Image from 'next/image'
import CategoryPhone from '../../../public/CategoryCellPhone.svg'
import CategoryComputer from '../../../public/CategoryComputer.svg'
import CategoryCamera from '../../../public/CategoryCamera.svg'
import CategoryGamepad from '../../../public/CategoryGamepad.svg'
// import CategoryPhone from '../../../public/Category-Phone.svg'

const Categorylist = () => {

  const categories: any = [
    {
      id: 1,
      name: 'Phones',
      svg: CategoryPhone
    },
    {
      id: 2,
      name: 'Camera',
      svg: CategoryCamera
    },
    {
      id: 3,
      name: 'Gaming',
      svg: CategoryGamepad
    },
    {
      id: 4,
      name: 'Computer',
      svg: CategoryComputer
    },
  ]
  return (
    <div className='py-12 px-6'>
        <div className="flex gap-3 items-center">
            <div className="w-4 h-8 rounded-sm bg-blue-500" />
            <p className="text-blue-500 font-medium">Categories</p>
        </div>
        <h1 className="md:text-3xl text-xl font-semibold whitespace-nowrap pt-6">Browse By Categorys</h1>
        <div className="pt-6 flex gap-6 overflow-x-scroll scrollbar-hide">
         {categories.map((category: any) => (
          <div className="py-10 my-0 px-12 border border-gray-400 rounded cursor-pointer hover:transition hover:duration-200 hover:bg-blue-500 group" key={category.id}>
            <Image className='group-hover:fill-white mx-auto' src={category.svg} width={50} height={100} alt={category.name} />
            <h3 className="text-center group-hover:text-white">{category.name}</h3>
          </div>
         ))}
        </div>
    </div>
  )
}

export default Categorylist