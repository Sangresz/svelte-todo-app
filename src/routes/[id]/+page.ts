import { db } from "$lib/db.svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const list = db.getList(params.id);

  return {
    list: list
  }
};