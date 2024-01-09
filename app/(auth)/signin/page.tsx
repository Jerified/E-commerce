'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import {useForm, SubmitHandler} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { signInData, signInSchema } from '@/lib/schema'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const Signin = () => {

    const [showPassword, setShowPassword] = useState(false)
   const router = useRouter()

    const handleClickPassword = () => {
      setShowPassword(!showPassword)
    }


    const {register, handleSubmit, formState:{errors}} = useForm<signInData>({
      resolver: zodResolver(signInSchema)
    })

    const onSubmit:SubmitHandler<signInData>  = async (data) => {
      console.log(data)
      try {
        const signInData = await signIn('credentials', {
          ...data,
           redirect: true,
           callbackUrl: '/'
         })
         .then((callback) => {
           console.log(callback?.error)
         })
         console.log(signInData)
      } catch (error) {
        console.log(error)
      }
      

      // if(signInData?.error) {
      //   console.log(signInData?.error)
      // } else {
      //   router.push('/')
      // }
    }    
  return (
    <form className=' flex justify-center h-screen items-center' onSubmit={handleSubmit(onSubmit)}>
    <div className="bg-white rounded-md w-[80%] md:w-[60%] lg:w-[30%] text-center flex flex-col py-6 gap-7">
      <h1 className='text-2xl font-semibold ' >Welcome</h1>
      <input type="email"  id="" className='input justify-center' placeholder='Enter Your Email'  {...register('email')}/>
      {errors?.email && (
          <span className="error">{errors.email?.message}</span>
        )}
      <div className="relative w-full">
        <input type={showPassword ? 'text' : 'password'} id="" className='input relativ w-full mx-auto' placeholder='Enter Your Password'  {...register('password')}/>
        <button type="button" className=' absolute top-3 right-4 ' onClick={handleClickPassword}>
          {showPassword ?
          <AiOutlineEye className='text-2xl '  /> : <AiOutlineEyeInvisible  className='text-2xl ' />
          }
        </button>
        {errors?.password && (
          <span className="error">{errors.password?.message}</span>
        )}
      </div>
      <button type='submit' className="bg-[#94A3B8] w-full mx-auto h-12 rounded-md hover:bg-[#8599B6] transition duration-150 text-white">
        Login
      </button>
      <div className="mx-auto py-0 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 font-semibold">Or</div>
      <button className="bg-[#3D4B5F] w-full mx-auto h-12 rounded-md hover:bg-[#263141] transition duration-150 text-white flex items-center justify-center px-3 gap-2 border-0" type='button'>
        <BiLogoFacebook className='text-2xl' />
        <div className="">
        Signup with Facebook
        </div>
      </button>
      <button className=" bg-[#3D4B5F] w-full mx-auto h-12 rounded-md hover:bg-[#263141] transition duration-150 text-white flex items-center justify-center px-3 gap-2 border-0" type='button' onClick={() => signIn("google")}>
        <FcGoogle className='text-2xl' />
        <div className="">
        Signup with Google
        </div>
      </button>
      <p className="underline">Don&apos;t  have an account? <Link href='/signup' className="text-blue-600 pl-2 hover:text-blue-800 active:text-blue-950">Sign Up</Link></p>
    </div>

  </form>
  )
}

export default Signin