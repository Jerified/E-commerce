import { getCart } from '@/lib/cart';
import React from 'react'
import CartEntry from './CartEntry';
// import { setProductQuantity } from './actions';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table"
import { setProductQuantity } from './actions';


export const metadata = {
    title: "Your Cart - Exclusive",
};

const page = async () => {

    const cart = await getCart();
    console.log(cart);
    return (
        <section className=" py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center pb-12">
                    <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
                </div>

                {!cart?.items.length && <p className='text-3xl font-semibold text-center'>Your cart is empty.</p>}
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    {cart?.items.length !== 0 && (<TableHeader>
                        <TableRow>
                            <TableHead className="">PRODUCTS</TableHead>
                            <TableHead>QUANTITY</TableHead>
                            <TableHead>REMOVE</TableHead>
                            <TableHead className="text-right">PRICE</TableHead>
                            <TableHead className="text-right">TOTAL</TableHead>
                        </TableRow>
                    </TableHeader>)}
                    <TableBody>
                        
                            {cart?.items.map((cartItem) => (
                                <CartEntry
                                    cartItem={cartItem}
                                    key={cartItem.id}
                                    setProductQuantity={setProductQuantity}
                                />
                            ))}
                    </TableBody>
                </Table>

            </div>
        </section>
    )
}

export default page