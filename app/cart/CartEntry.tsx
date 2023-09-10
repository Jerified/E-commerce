"use client";

import { CartItemWithProduct } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
    cartItem: CartItemWithProduct;
    setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
    cartItem: { product, quantity },
    setProductQuantity,
}: CartEntryProps) {
    const [isPending, startTransition] = useTransition();

    const quantityOptions: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) {
        quantityOptions.push(
            <option value={i} key={i}>
                {i}
            </option>
        );
    }

    return (
        <div>
            <ul className="-my-8">
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div className="shrink-0">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                        />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                                <Link href={"/products/" + product.id} className="text-base font-semibold text-gray-900">
                                    {product.title}
                                </Link>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <div className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">Price: {formatPrice(product.price)}</div>

                                <div className="sm:order-1">
                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                        <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                                        <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            {/* <div className="flex flex-wrap items-center gap-3">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                />
                <div>
                    <Link href={"/products/" + product.id} className="font-bold">
                        {product.title}
                    </Link>
                    <div>Price: {formatPrice(product.price)}</div>
                    <div className="my-1 flex items-center gap-2">
                        Quantity:
                        <select
                            className="select-bordered select w-full max-w-[80px]"
                            defaultValue={quantity}
                            onChange={(e) => {
                                const newQuantity = parseInt(e.currentTarget.value);
                                startTransition(async () => {
                                    await setProductQuantity(product.id, newQuantity);
                                });
                            }}
                        >
                            <option value={0}>0 (Remove)</option>
                            {quantityOptions}
                        </select>
                    </div>
                    <div className="flex items-center gap-3">
                        Total: {formatPrice(product.price * quantity)}
                        {isPending && (
                            <span className="loading loading-spinner loading-sm" />
                        )}
                    </div>
                </div>
            </div> */}
            <div className="divider" />
        </div>
    );
}