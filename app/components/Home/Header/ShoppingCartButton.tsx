"use client";

import { ShoppingCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import Image from "next/image";
import PriceTag from "../../PriceTag";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-[40vw] rounded bg-base-100 shadow"
      >
        <div className="card-body">
          <p className="text-center font-bold text-2xl">Your Cart</p>
          <div className="divider" />
          {cart?.items.map((cartItem) => (
            <div className="flex justify-between items-center gap-4" key={cartItem.id}>
              <div className="flex items-center gap-2 pb-2" >
                <Image
                  src={cartItem.product.thumbnail}
                  alt={cartItem.product.title}
                  width={200}
                  height={200}
                  className="h-16 w-16 max-w-full rounded object-cover"
                />
                <div className="">
                  <p className="font-semibold">{cartItem.product.title}</p>
                  <PriceTag className=' font-bold text-gray-900 dark:text-white' price={cartItem.product.price} />
                </div>
                
              </div>
              <p className="font-medium flex justify-end text-end">Quantity: {cartItem.quantity}</p>
            </div>

          ))}
                <div className="divider" />

          <span className="text-lg font-bold">{cart?.size || 0} Items</span>
          <span className="font-semibold flex justify-between">
            Subtotal:
            <span className="">
              {formatPrice(cart?.subtotal || 0)}
            </span>
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn-primary btn-block btn"
              onClick={closeDropdown}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}