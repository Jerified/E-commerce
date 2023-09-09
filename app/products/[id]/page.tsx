import { prisma } from '@/lib/prisma'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import PriceTag from '@/app/components/PriceTag'
import AddToCartButton from '../AddToCartButton'
import { incrementProductQuantity } from '../action'

type TProductProps = {
    params: {
        id: string
    }
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if (!product) notFound()
    // console.log(product);
    
    return product
})

export async function generateMetadata({
    params: {id}
}: TProductProps): Promise<Metadata> {
    const product = await getProduct(id)

    return {
        title: product.title + " - Exclusive",
        description: product.description,
        openGraph: {
            images: [{url: product.thumbnail}]
        }
    }
}

const ProductPage = async ({params: {id}}: TProductProps) => {
    const product = await getProduct(id)
  return (
    <div className='py-12 px-6 lg:px-0 md:flex gap-8'>
        <div className="md:w-[60%] ">
        <Image width={500} height={500} className="w-full rounded-sm h-[25rem]" src={product.thumbnail} alt="product image" priority />
        </div>
        <div className="pt-6 pb-4 lg-pt-0 md:w-[40%]">
            <h1 className="text-3xl font-semibold text-center">{product.title}</h1>
            <p className="pt-4">{product.description}</p>
            <PriceTag className='text-xl font-bold pt-3 text-gray-900 dark:text-white' price={product.price} />
            <AddToCartButton
                productId={product.id}
                incrementProductQuantity={incrementProductQuantity}
        />
        </div>
    </div>
  )
}

export default ProductPage