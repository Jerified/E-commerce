import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {getServerSession} from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata = {
    title: "Add Product- Jerrizone"
}

const addProduct = async (formData: FormData) => {
    "use server"

    // const session = await getServerSession(authOptions)

    // if (!session) {
    //     redirect('/signin?callbackUrl=/add-product')
    // }

    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const imageUrl = formData.get("imageUrl")?.toString()
    const price = Number(formData.get("price") || 0)

    console.log(name, description, imageUrl, price)

    if (!name || !description || !imageUrl || !price) {
        throw Error ("Missing required fields")
    }

    await prisma.product.create({
        data: {
            name,
            description,
            image: imageUrl,
            price
        }
    })
 
    redirect('/')

}

const page = async () => {
    // const session = await getServerSession(authOptions)

    // if (!session) {
    //     redirect('/signin?callbackUrl=/add-product')
    // }
  return (
    <div className='p-4 max-w-6xl mx-auto min-w-[300px]'>
        <h1 className="text-2xl font-semibold flex justify-center mb-4">Add Product</h1>
        <form action={addProduct}>
            <input type="text" name='name' required  className="w-full h-12 mb-3 rounded-md px-3" placeholder='Name' />
            <textarea name="description" required  className="w-full h-24 mb-3 rounded-md px-3" placeholder='Description'/>
            <input type="url" name="imageUrl" required  className='w-full h-12 mb-3 rounded-md px-3' placeholder='Image URL' />
            <input type="number" name="price" required  className='w-full h-12 mb-3 rounded-md px-3' placeholder='Price'/>
            <button className="bg-red-500 w-full h-12 rounded-lg" type='submit' >ADD PRODUCT</button>
        </form>
    </div>
  )
}

export default page