"use server";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AddProductData, AddProductSchema } from "@/lib/schema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function addProduct(formData: FormData) {
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
  const images = JSON.parse(formData.get("images").toString());

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
