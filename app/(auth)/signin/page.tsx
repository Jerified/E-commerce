'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false)
  

    const handleClickPassword = () => {
      setShowPassword(!showPassword)
    }
    
  return (
    <form action="" className=' flex justify-center h-screen items-center'>
    <div className="bg-white rounded-md w-[80%] md:w-[60%] lg:w-[40%] text-center flex flex-col py-6 gap-7">
      <h1 className='text-2xl font-semibold ' >Welcome</h1>
      <input type="email" name="" id="" className='input ' placeholder='Enter Your Email' />
      <div className="relative  w-[80%]  lg:w-[70%] mx-auto">
        <input type={showPassword ? 'text' : 'password'} name="" id="" className='input relativ w-full mx-auto' placeholder='Enter Your Password' />
        <button type="button" className=' absolute top-3 right-4 ' onClick={handleClickPassword}>
          {showPassword ?
          <AiOutlineEye className='text-2xl '  /> : <AiOutlineEyeInvisible  className='text-2xl ' />
          }
        </button>
      </div>
      <button type='submit' className="bg-[#94A3B8] w-[80%] lg:w-[70%] mx-auto h-12 rounded-md hover:bg-[#8599B6] transition duration-150 text-white  ">
        Login
      </button>
      <div className="mx-auto py-0 flex w-[80%] lg:w-[70%] items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 font-semibold">Or</div>
      <button className="bg-[#3D4B5F] w-[80%] lg:w-[70%] mx-auto h-12 rounded-md hover:bg-[#263141] transition duration-150 text-white flex justify-evenl items-center px-3 ">
        <BiLogoFacebook className='text-2xl' />
        <div className=" mx-auto">
        Signup with Facebook
        </div>
      </button>
      <button className=" w-[80%] lg:w-[70%] mx-auto h-12 rounded-md  transition duration-150 border border-[#1E293B] hover:bg-[#F2F2F2] flex justify-evenl items-center px-3 ">
        <FcGoogle className='text-2xl' />
        <div className=" mx-auto">
        Signup with Google
        </div>
      </button>
      <p className="underline">Don&apos;t  have an account? <Link href='/signup' className="text-blue-600 pl-2 hover:text-blue-800 active:text-blue-950">Sign Up</Link></p>
    </div>

  </form>
  )
}

export default Signin