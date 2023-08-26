import React from 'react'

const SideNav = ({products}) => {
    // const categories = Object.keys(products)
    // console.log(categories);
    
  return (
    <aside className='border-r border-gray-400 hidden lg:block w-[20%] pr'>
        {
            products.map((category) => (
                <ul key={category}>
                    {category}
                </ul>
            ))
        }
    </aside>
  )
}

export default SideNav