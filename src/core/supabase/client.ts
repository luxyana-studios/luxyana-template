import { createClient } from "@supabase/supabase-js";
import { supabaseMMKVStorage } from "@/core/storage/mmkv";
import type { Database } from "@/types/supabase";

const supabaseUrl =
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

if (!process.env.EXPO_PUBLIC_SUPABASE_URL) {
  console.warn(
    "⚠️ EXPO_PUBLIC_SUPABASE_URL is not set. Copy .env.example to .env and add your Supabase credentials.",
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: supabaseMMKVStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
