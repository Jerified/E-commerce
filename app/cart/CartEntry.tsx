"use client";

import { CartItemWithProduct } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table"
import PriceTag from "../components/PriceTag";
import { removeProductFromCart } from "./actions";

interface CartEntryProps {
    cartItem: CartItemWithProduct;
    setProductQuantity: (productId: string, quantity: number) => Promise<void>;
    removeProductFromCart: (productId: string) => Promise<void>;
}

export default function CartEntry({
    cartItem: { product, quantity },
    setProductQuantity,
    removeProductFromCart
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
        <TableRow>
            <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="h-24 w-24 max-w-full rounded object-cover"
                    />
                    <p className="font-semibold">{product.title}</p>
                </div>
            </TableCell>
            <TableCell>
            <div className="my-1 flex items-center gap-2">
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
              
              {quantityOptions}
            </select>
            {isPending && <span className="loading loading-spinner loading-md" />}
          </div>
            </TableCell>
            <TableCell className="text-red-500 underline-offset-1 cursor-pointer" onClick={() => {
                // startTransition(async () => {
                //     await removeProductFromCart(product.id);
                //   });
            }}>Remove</TableCell>
            <TableCell className="text-right">
                <PriceTag className=' font-bold text-gray-900 dark:text-white' price={product.price} />
            </TableCell>
            <TableCell className="text-right">
                <PriceTag className=' font-bold text-gray-900 dark:text-white' price={product.price * quantity} />
            </TableCell>
            <div className="divider" />
        </TableRow>
    );
}