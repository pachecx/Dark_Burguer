import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthUser {
  name: string;
  email: string;
  phone?: string;
}

interface LoginPayload {
  email: string;
  password: string;
  name?: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => void;
  register: (payload: RegisterPayload) => void;
  logout: () => void;
  updateProfile: (payload: Partial<AuthUser>) => void;
}

const getNameFromEmail = (email: string) => {
  const [prefix] = email.split("@");
  const normalized = prefix.replace(/[._-]/g, " ").trim();
  if (!normalized) return "Cliente";
  return normalized
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: ({ email, name }) => {
        set({
          user: {
            email,
            name: name?.trim() || getNameFromEmail(email),
          },
          isAuthenticated: true,
        });
      },
      register: ({ name, email, phone }) => {
        set({
          user: {
            name: name.trim(),
            email,
            phone,
          },
          isAuthenticated: true,
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (payload) => {
        set((state) => {
          if (!state.user) return state;

          return {
            user: {
              ...state.user,
              ...payload,
            },
            isAuthenticated: true,
          };
        });
      },
    }),
    {
      name: "dark-burguer-auth",
    },
  ),
);
