import { createClient } from "@supabase/supabase-js";
const BASEURL: string = process.env.REACT_APP_SUPABASE_URL ?? "";
const APIKEY: string = process.env.REACT_APP_SUPABASE_API_KEY ?? "";

export const supabase = createClient(BASEURL, APIKEY);
