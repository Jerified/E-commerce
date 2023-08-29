

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
    title: "Add Product- Exclusive "
}

const Product =  () => {
    
     async function addProduct(formData: FormData) {
        'use server'
        // const session = await getServerSession(authOptions);
      
        // if (!session) {
        //   redirect("/signin?callbackUrl=/add-product");
        // }
      
        console.log(formData);
        
      
        const title = formData.get("title")?.toString() || '';
        const description = formData.get("description")?.toString() || '';
        const price = Number(formData.get("price") || 0);
        const rating = Number(formData.get("rating") || 0);
        const category = formData.get("category")?.toString() || '';
        const thumbnail = formData.get("thumbnail")?.toString() || '';
        const images = formData.get("images") || ''
      
        const data = {
          title,
          description,
          price,
          rating,
          category,
          thumbnail,
          images,
        };
        // const validData = AddProductSchema.parse(FormData);
        
        await prisma.product.create({
          data: data
        });
      }
      
    return (
        <div className='p-4 max-w-6xl mx-auto min-w-[300px]'>
            {/* <h1 className="text-2xl font-semibold flex justify-center mb-4">Add Product</h1> */}
            <h1 className="text-4xl font-bold text-center my-8">Create a New Product</h1>
                <form action={addProduct} className="max-w-xl mx-auto p-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-semibold">Title</label>
                        <input type="text" id="title" required  className="addProduct" />
                       
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                        <textarea id="description" required className="addProduct"></textarea>
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-semibold">Price</label>
                        <input type="number" required id="price" className="addProduct" />
             
                    </div>
                    <div className="mb-4">
                        <label htmlFor="discountPercentage" className="block text-sm font-semibold">Discount Percentage</label>
                        <input type="number" id="discountPercentage"  className="addProduct" />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-semibold">Rating</label>
                        <input type="number"  required id="rating"  className="addProduct" />
                       
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                        <input type="text" required id="category" className="addProduct" />
                       
                    </div>
                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block text-sm font-semibold">Thumbnail</label>
                        <input type="text" required id="thumbnail" className="addProduct" />
                     
                    </div>
                    <div className="mb-4">
                        <label htmlFor="images" className="block text-sm font-semibold">Images</label>
                        <input type="text" id="images" className="addProduct" placeholder="Enter comma-separated URLs" />
                    </div>
                    <div className="mb-4">
                    <button className="bg-red-500 w-full h-12 rounded-lg" type='submit' >ADD PRODUCT</button>
                        {/* <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create Product</button> */}
                    </div>
                </form>
        </div>
    )
}

export default Product
