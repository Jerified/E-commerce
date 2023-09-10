

'use client'

// import { useState } from 'react'

import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { redirect, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AddProductData, AddProductSchema } from '@/lib/schema'
import { addProduct } from '../action'

export const metadata = {
    title: "Add Product - Exclusive"
}

const Product = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddProductData>({
        resolver: zodResolver(AddProductSchema),
    })

    const onSubmit: SubmitHandler<AddProductData> = async (data) => {
        console.log(typeof data.rating)
        try {
            // console.log(data)
            // if(typeof data.rating === 'number' && typeof data.price === 'number' && Array.isArray(data.images)){
            const product = await addProduct(data)
            // }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='p-4 max-w-6xl mx-auto min-w-[300px]'>
            <h1 className="text-4xl font-bold text-center my-8">Create a New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold">Title</label>
                    <input type="text" id="title" required {...register("title")} className="addProduct" />
                    {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                    <textarea id="description" required {...register("description")} className="addProduct"></textarea>
                    {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-semibold">Price</label>
                    <input type="number" required id="price" {...register("price", { valueAsNumber: true })} className="addProduct" />
                    {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="discountPercentage" className="block text-sm font-semibold">Discount Percentage</label>
                    <input type="number" id="discountPercentage" {...register("discountPercentage", { valueAsNumber: true })} className="addProduct" />
                    {errors.discountPercentage && <p className="text-red-500 text-xs">{errors.discountPercentage.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-semibold">Rating</label>
                    <input type="number" required id="rating" {...register("rating", { valueAsNumber: true })} className="addProduct" />
                    {errors.rating && <p className="text-red-500 text-xs">{errors.rating.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                    {/* <input type="text" required id="category" {...register("category")} className="addProduct" /> */}
                    {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Category</label> */}
                    <select {...register("category")} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value='Clothing'>Clothing</option>
                        <option value='Phones'>Phones</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Gaming'>Gaming</option>
                        <option value='Smartwatch'>Smartwatch</option>
                        <option value='Groceries'>Groceries</option>
                        <option value='Computer'>Computer</option>
                        <option value='Toys'>Toys</option>
                    </select>

                    {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block text-sm font-semibold">Thumbnail</label>
                    <input type="text" required id="thumbnail" {...register("thumbnail")} className="addProduct" />
                    {errors.thumbnail && <p className="text-red-500 text-xs">{errors.thumbnail.message}</p>}
                </div>
                {/* <div className="mb-4">
                        <label htmlFor="images" className="block text-sm font-semibold">Images</label>
                        <input type="text" id="images" {...register("images")} className="addProduct" placeholder="Enter comma-separated URLs" />
                        {errors.images && <p className="text-red-500 text-xs">{errors.images.message}</p>}
                    </div> */}
                <div className="mb-4">
                    <button className="bg-red-500 w-full h-12 rounded-lg" type='submit' >ADD PRODUCT</button>
                    {/* <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create Product</button> */}
                </div>
            </form>
        </div>
    )
}

export default Product
