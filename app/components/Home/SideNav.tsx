import React from 'react'

const SideNav = ({categories}) => {
    // const categories = Object.keys(products)
    // console.log(categories);
    
  return (
    <aside className='border-r border-gray-400 hidden lg:flex lg:flex-col w-[20%] capitalize  gap-2 pt-8'>
        {
            categories.map((category) => (
                <ul key={category}>
                    {category}
                </ul>
            ))
        }
    </aside>
  )
}

export default SideNav