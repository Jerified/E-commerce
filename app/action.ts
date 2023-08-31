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
  


  // const formData = {
  //   title,
  //   description,
  //   price,
  //   rating,
  //   category,
  //   thumbnail,
  //   // images,
  // };
  const validData = AddProductSchema.parse(formData);
  
  await prisma.product.create({
    data: validData
  });

  redirect('/')
}
