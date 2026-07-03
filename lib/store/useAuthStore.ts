"use client";

import type { ILoginResponse, IUser } from "@/types/auth";
import {
  clearTokens,
  getDecodedAccessToken,
  setTokens,
} from "@/utils/tokenManager";
import { create } from "zustand";

interface AuthState {
  user: IUser | null;
  login: (tokens: ILoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: typeof window === "undefined" ? null : getDecodedAccessToken<IUser>(),
  login: (tokens) => {
    setTokens(tokens.accessToken, tokens.refreshToken);
    set({ user: getDecodedAccessToken<IUser>() });
  },
  logout: () => {
    clearTokens();
    set({ user: null });
  },
}));
