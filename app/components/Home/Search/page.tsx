import React from 'react'
import {CiSearch} from "react-icons/ci"


const Search = () => {
  return (
    <div className='relative'>
        <input type="text" className="h-12 bg-gray-100 w-[21rem] placeholder:text-black rounded-md px-4 border-none outline-none" placeholder='What are you looking for?' />
        <div className="inline-block absolute right-3 top-3  ">
            <CiSearch className="text-2xl" />
        </div>
    </div>
  )
}

export default Search