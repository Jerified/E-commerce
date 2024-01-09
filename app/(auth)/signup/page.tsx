'use client'

import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { schema, signUpData } from '@/lib/schema'
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react"


const Signup = () => {

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickPassword = () => {
    setShowPassword(!showPassword)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<signUpData>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<signUpData> = async (data) => {
    console.log(data)
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      })

    })

    if (response.ok) {
      router.push('/signin')
    } else {
      console.error('Registration failed')
    // }
    // console.log(data);
    // console.log(response)

  }
  }

  return (
    <form action="" className=' flex justify-center h-screen items-center' onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white rounded-md w-[80%] md:w-[60%] lg:w-[30%] text-center flex flex-col py-6 gap-7">
        <h1 className='text-2xl font-semibold ' >Create an account</h1>
        <input type="text" id="username" className='input' placeholder='Enter Your Username' {...register('username')} />
        {errors?.username && (
          <span className="error">{errors.username?.message}</span>
        )}
        <input type="email" id="email" className='input ' placeholder='Enter Your Email' {...register('email')} />
        {errors?.email && (
          <span className="error">{errors.email?.message}</span>
        )}
        <div className="relative  w-full mx-auto ">
          <input type={showPassword ? 'text' : 'password'} id="password" className='input relativ w-full mx-auto' placeholder='Enter Your Password' {...register('password')} />
          <button type="button" className=' absolute top-3 right-4 ' onClick={handleClickPassword}>
            {showPassword ?
              <AiOutlineEye className='text-2xl ' /> : <AiOutlineEyeInvisible className='text-2xl ' />
            }
          </button>
        </div>
        {errors?.password && (
          <span className="error">{errors.password?.message}</span>
        )}
        <button type='submit' className="bg-[#94A3B8] w-full mx-auto h-12 rounded-md hover:bg-[#8599B6] transition duration-150 text-white border-0 ">
          Sign Up
        </button>
        <div className="mx-auto py-0 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 font-semibold">Or</div>
        <button className="bg-[#3D4B5F] w-full mx-auto h-12 rounded-md hover:bg-[#263141] transition duration-150 text-white flex items-center justify-center px-3 gap-2 border-0">
          <BiLogoFacebook className='text-2xl' />
          <div className=" mx-a">
            Signup with Facebook
          </div>
        </button>
        <button className="bg-[#3D4B5F] w-full mx-auto h-12 rounded-md hover:bg-[#263141] transition duration-150 text-white flex items-center justify-center px-3 gap-2 border-0 " type='button' onClick={() => signIn("google")}>
          <FcGoogle className='text-2xl' />
          <div className="">
            Signup with Google
          </div>
        </button>
        <p className="underline">Already have an account? <Link href='/signin' className="text-blue-600 pl-2 hover:text-blue-800 active:text-blue-950">Login</Link></p>
      </div>

    </form>
  )
}

export default Signup