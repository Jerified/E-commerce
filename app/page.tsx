import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import Header from './components/Home/Header/page'
// import { Header } from "./components/Home/Header"
import SideNav from "./components/Home/SideNav"
import Banner from "./components/Home/Banner"
// import Signup from './(auth)/signup/page'

export default async function Home() {

  const womenProducts = ["womens-dresses", "womens-shoes", "womens-watches", "womens-bag", "womens-jewellery", "womens-bags"]

  const menProducts = ["mens-shirts", "mens-shoes", "mens-watches"]

  const session = await getServerSession(authOptions)
  const data = await fetch('https://dummyjson.com/products'
  // , {

  //   cache: 'no-cache'
  // }
  )

  const res = await fetch('https://dummyjson.com/products/categories'
  // , {

  //   cache: 'no-cache'
  // }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product data')
  }

  const products = await res.json()
  const allProducts = await data.json()

  const categories = products.filter((category) => !womenProducts.includes(category) && !menProducts.includes(category))
  // console.log(cat)

categories.unshift("Women Fashion", "Men Fashion")
// console.log(cat)

  return (
    <main className="">
      {/* <Signup */}
      <div className="w-full flex">
        <SideNav categories={categories} />
        <Banner allProducts={allProducts} />
      </div>
      {/* products.map(product => (
        <h1>{product.title}</h1>
      )) */}
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, vero beatae blanditiis atque, esse nemo velit id, cupiditate excepturi corporis animi odit incidunt quam reiciendis sint sapiente aspernatur quia dolorum. */}
    </main>
  )
}
