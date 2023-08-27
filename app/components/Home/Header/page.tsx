import React from 'react'
import  Logo  from '../../../../public/Logo.svg'
import Search from '../Search/page'
import {PiShoppingCartLight} from "react-icons/pi"

const Header = () => {
  return (
    <header className='max-w-6xl mx-auto px-5 lg:px-0'>
        <div className="flex justify-between py-7 items-center ">
            {/* <img src={Logo} alt='logo' /> */}
            <h1 className="text-2xl font-semibold">Exclusive</h1>
            <ul className='md:flex gap-4 hidden m '>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign in</li>
            </ul>
            <div className="gap-16 items-center hidden md:flex">
                <Search />
                <PiShoppingCartLight className="text-3xl"/>
            </div>
        
        </div>
    </header>
  )
}

export default Header