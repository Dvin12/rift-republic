import supabase from "./supabase";

export async function getSupaItems() {
  const { data: items, error } = await supabase.from("items").select("*");

  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }
  return items;
}

export async function getSupaItemById(itemId) {
  const { data: item, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", itemId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Item could not be loader");
  }

  return item;
}
