"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
    {title: "About", href:"#about"},
    {title: "Projects", href:"#projects"},
    {title: "Contact", href:"#about"},
]

const Navbar = () => {
    const path = usePathname()
    const [open, setOpen] = useState(false)
    const toggleMenu =
  return (
    <div className='flex items-center justify-between py-6 px-4'>
        <p className="text-2xl font-semibold text-white">Blessing.</p>
        <div className="flex justify-center">
            <ul className="flex gap-4 uppercase">
               {navLinks.map((link, i): any => {
                return (
                    <Link href={link.href} className="relative" key={link.title}>
                        {link.href === path && (
                            <motion.span
                            layoutId='underline'
                            className='absolute left-0 top-full block h-[1px] w-full bg-black'/>
                        )}
                       <AnimatedLink title={link.title} />
                    </Link>
                )
               })}
            </ul>
            
        </div>
        <button className="text-white px-3 py-1 bg-[#9796F0] rounded-full">
                Get Resume
            </button>
    </div>
  )
}

export default Navbar