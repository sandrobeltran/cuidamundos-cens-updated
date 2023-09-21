import { TUserData } from "@/utils/customTypes";
import { create } from "zustand";

type TUserStore = {
  user: TUserData | null;
  loading: boolean;
  error: string | null;
  setUser: (user: any) => void;
  logOut: () => void;
  setLoading: (value: boolean) => void;
  setError: (value: string) => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  user: null,
  error: null,
  loading: false,
  setUser: (user) => set(() => ({ user, loading: false })),
  logOut: () => set({}, true),
  setLoading: (value) => set({ loading: value }),
  setError: (value) => set({ error: value, loading: false }),
}));
