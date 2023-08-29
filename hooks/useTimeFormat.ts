import React, { useState, useEffect } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const days = time.getDate() - 1;
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return time
};

export default useTime

// 'use client'

// // import { useState } from 'react'

// import { authOptions } from '@/lib/auth'
// import { prisma } from '@/lib/prisma'
// import { getServerSession } from 'next-auth'
// import { redirect, useRouter } from 'next/navigation'
// import { SubmitHandler, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { AddProductData, AddProductSchema } from '@/lib/schema'
// import { addProduct } from '../action'

// export const metadata = {
//     title: "Add Product- Exclusive "
// }

// const Product =  () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<AddProductData>({
//         resolver: zodResolver(AddProductSchema),
//       })
    
//       const onSubmit : SubmitHandler<AddProductData> = async (data) => {
//         console.log(typeof data.rating)
//         try {
//             console.log(data)
//             // if(typeof data.rating === 'number' && typeof data.price === 'number' && Array.isArray(data.images)){
//                 const product = await addProduct(data)
//             // }
           
//               } catch (error) {
//           console.error(error)
//         }
//       }
//     return (
//         <div className='p-4 max-w-6xl mx-auto min-w-[300px]'>
//             {/* <h1 className="text-2xl font-semibold flex justify-center mb-4">Add Product</h1> */}
//             <h1 className="text-4xl font-bold text-center my-8">Create a New Product</h1>
//                 <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4">
//                     <div className="mb-4">
//                         <label htmlFor="title" className="block text-sm font-semibold">Title</label>
//                         <input type="text" id="title" required {...register("title")} className="addProduct" />
//                         {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="description" className="block text-sm font-semibold">Description</label>
//                         <textarea id="description" required {...register("description")} className="addProduct"></textarea>
//                         {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="price" className="block text-sm font-semibold">Price</label>
//                         <input type="number" required id="price" {...register("price")} className="addProduct" />
//                         {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
//                     </div>
//                     {/* <div className="mb-4">
//                         <label htmlFor="discountPercentage" className="block text-sm font-semibold">Discount Percentage</label>
//                         <input type="number" id="discountPercentage" {...register("discountPercentage")} className="addProduct" />
//                         {errors.discountPercentage && <p className="text-red-500 text-xs">{errors.discountPercentage.message}</p>}
//                     </div> */}
//                     <div className="mb-4">
//                         <label htmlFor="rating" className="block text-sm font-semibold">Rating</label>
//                         <input type="number"  required id="rating" {...register("rating")} className="addProduct" />
//                         {errors.rating && <p className="text-red-500 text-xs">{errors.rating.message}</p>}
//                     </div>
//                     {/* <div className="mb-4">
//                         <label htmlFor="stock" className="block text-sm font-semibold">Stock</label>
//                         <input type="number" id="stock" {...register("stock")} className="w-full border p-2" />
//                         {errors.stock && <p className="text-red-500 text-xs">{errors.stock.message}</p>}
//                     </div> */}
//                     {/* <div className="mb-4">
//                         <label htmlFor="brand" className="block text-sm font-semibold">Brand</label>
//                         <input type="text" id="brand" {...register("brand")} className="addProduct" />
//                         {errors.brand && <p className="text-red-500 text-xs">{errors.brand.message}</p>}
//                     </div> */}
//                     <div className="mb-4">
//                         <label htmlFor="category" className="block text-sm font-semibold">Category</label>
//                         <input type="text" required id="category" {...register("category")} className="addProduct" />
//                         {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="thumbnail" className="block text-sm font-semibold">Thumbnail</label>
//                         <input type="text" required id="thumbnail" {...register("thumbnail")} className="addProduct" />
//                         {errors.thumbnail && <p className="text-red-500 text-xs">{errors.thumbnail.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="images" className="block text-sm font-semibold">Images</label>
//                         <input type="text" id="images" {...register("images")} className="addProduct" placeholder="Enter comma-separated URLs" />
//                         {errors.images && <p className="text-red-500 text-xs">{errors.images.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                     <button className="bg-red-500 w-full h-12 rounded-lg" type='submit' >ADD PRODUCT</button>
//                         {/* <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create Product</button> */}
//                     </div>
//                 </form>
//         </div>
//     )
// }

// export default Product
