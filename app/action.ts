"use server";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AddProductSchema } from "@/lib/schema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function addProduct(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const price = Number(formData.get("price") || 0);
  const rating = Number(formData.get("rating") || 0);
  const category = formData.get("category")?.toString();
  const thumbnail = formData.get("thumbnail")?.toString();
  const images = formData.get("images")?.toString();

  const data = {
    name,
    description,
    price,
    rating,
    category,
    thumbnail,
    images,
  };
  const validData = AddProductSchema.parse(data);

  await prisma.product.create({
    data: validData,
  });
}
