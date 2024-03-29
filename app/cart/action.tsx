"use server";

import { createCart, getCart } from "@/lib/cart";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function removeProductFromCart(productId:string){
  const cart = (await getCart()) ?? (await createCart());
  if (cart) {
    await prisma.cart.delete({
      where: {
        id: cart.id,
        items: {
          some: {
            productId
          }
        }
      }
    })
  }

}

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.productId === productId);

  if (quantity === 0) {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: { id: articleInCart.id },
          },
        },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: {
              where: { id: articleInCart.id },
              data: { quantity },
            },
          },
        },
      });
    } else {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
      });
    }
  }

  revalidatePath("/cart");
}