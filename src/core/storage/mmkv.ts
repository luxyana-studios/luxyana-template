import { createMMKV, type MMKV } from "react-native-mmkv";
import type { StateStorage } from "zustand/middleware";

export const mmkv: MMKV = createMMKV();

export const zustandMMKVStorage: StateStorage = {
  getItem: (name: string) => {
    const value = mmkv.getString(name);
    return value ?? null;
  },
  setItem: (name: string, value: string) => {
    mmkv.set(name, value);
  },
  removeItem: (name: string) => {
    mmkv.remove(name);
  },
};

export const supabaseMMKVStorage = {
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return value ?? null;
  },
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
  },
  removeItem: (key: string) => {
    mmkv.remove(key);
  },
};
