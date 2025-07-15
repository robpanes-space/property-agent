"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAgent(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const mobileNumber = formData.get("mobileNumber") as string;

  if (!firstName || !lastName || !email || !mobileNumber) {
    throw new Error("All fields are required");
  }

  await prisma.propertyAgent.create({
    data: {
      firstName,
      lastName,
      email,
      mobileNumber,
    },
  });

  revalidatePath("/");
}
