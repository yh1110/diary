import { createClient } from "@supabase/supabase-js";
const BASEURL: string = import.meta.env.VITE_SUPABASE_URL ?? "";
console.log(BASEURL);

const APIKEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(BASEURL, APIKEY);
console.log(supabase);
