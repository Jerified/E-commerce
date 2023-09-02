import React from 'react'
import CategoryPhone from '../../../public/Category-Phone.svg'
import CategoryCamera from '../../../public/Category-Camera.svg'
import CategoryGamepad from '../../../public/Category-Gamepad.svg'
// import CategoryPhone from '../../../public/Category-Phone.svg'

const Categorylist = () => {

  const categories = [
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
  ]
  return (
    <div className='py-12 px-6'>
        <div className="flex gap-3 items-center">
            <div className="w-4 h-8 rounded-sm bg-blue-500" />
            <p className="text-blue-500 font-medium">Categories</p>
        </div>
        <h1 className="md:text-3xl text-xl font-semibold whitespace-nowrap pt-6 ">Browse By Category</h1>
        <div className="">
          {categories.map(category => {
            <div className="" key={category.id}>
              
            </div>
          })}
        </div>
    </div>
  )
}

export default Categorylist