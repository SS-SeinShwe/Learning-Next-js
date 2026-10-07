"use server";

import { revalidateTag } from "next/cache";

export async function regreshPostsCache() {
  revalidateTag("posts", "max"); // tg-based revalidation
}
