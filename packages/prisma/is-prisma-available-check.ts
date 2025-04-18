import { Prisma } from "@prisma/client";

import prisma from ".";

export async function isPrismaAvailableCheck() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientInitializationError) {
      console.error('Error during DB operation:', e);
      // Database might not available at build time.
      throw e;
    } else {
      throw e;
    }
  }
}
