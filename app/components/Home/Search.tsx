import { redirect } from 'next/navigation';
import React from 'react'
import {CiSearch} from "react-icons/ci"

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

const Search = () => {
  return (
    <form action={searchProducts}>
      <div className='relative'>
          <input name="searchQuery" type="text" className="h-12 bg-gray-100 w-[21rem] placeholder:text-black rounded-md px-4 border-none outline-none" placeholder='What are you looking for?' />
          <div className="inline-block absolute right-3 top-3  ">
              <CiSearch className="text-2xl" />
          </div>
      </div>
    </form>
  )
}

export default Search