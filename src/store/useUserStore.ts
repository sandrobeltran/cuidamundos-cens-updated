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

const initialValues = {
  user: null,
  error: null,
  loading: true,
};

export const useUserStore = create<TUserStore>((set) => ({
  ...initialValues,
  setUser: (user) => set(() => ({ user, loading: false, error: null })),
  logOut: () => set({ ...initialValues, loading: false }),
  setLoading: (value) => set({ loading: value }),
  setError: (value) => set({ error: value, loading: false, user: null }),
}));
