import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import Header from './components/Home/Header/page'
// import { Header } from "./components/Home/Header"
import SideNav from "./components/Home/SideNav"
import Banner from "./components/Home/Banner"
// import FlashSales from './components/Home/FlashSales'
import dynamic from 'next/dynamic'
import Categorylist from './components/Home/Categorylist'
import { prisma } from '@/lib/prisma'

const FlashSales = dynamic(() => import('./components/Home/FlashSales'), {ssr: false})
// import Signup from './(auth)/signup/page'

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: {createdAt: "desc"}
  })

  // const products = [...new Set(members.map((m) => [m.category, m]))]
  // const products = new Set(Product)
  // const product = Array.from

  console.log(product);
  

  // const womenProducts = ["womens-dresses", "womens-shoes", "womens-watches", "womens-bag", "womens-jewellery", "womens-bags"]

  // const menProducts = ["mens-shirts", "mens-shoes", "mens-watches"]

  const session = await getServerSession(authOptions)
//   const data = await fetch('https://dummyjson.com/products'
//   // , {

//   //   cache: 'no-cache'
//   // }
//   )

//   const res = await fetch('https://dummyjson.com/products/categories'
//   // , {

//   //   cache: 'no-cache'
//   // }
//   )

//   if (!res.ok) {
//     throw new Error('Failed to fetch product data')
//   }

//   const products = await res.json()
//   const allProducts = await data.json()

//   const categories = products.filter((category) => !womenProducts.includes(category) && !menProducts.includes(category))
// categories.unshift("Women Fashion", "Men Fashion")



  return (
    <main className="">
      {/* <Signup */}
       <div className="w-full flex">
        <aside className="border-r border-gray-400 hidden lg:flex lg:flex-col w-[20%] capitalize  gap-2 pt-8">
        {product.map(product => (
            <SideNav product={product} key={product.id} />
        ))}
        </aside>
        <Banner product={product} />
      </div>
      <FlashSales product={product} />
      <Categorylist /> 
      
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, vero beatae blanditiis atque, esse nemo velit id, cupiditate excepturi corporis animi odit incidunt quam reiciendis sint sapiente aspernatur quia dolorum. */}
    </main>
  )
}
