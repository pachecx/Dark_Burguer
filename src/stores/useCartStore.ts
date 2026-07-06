import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "../data/types.produtos";

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: MenuItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const parsePriceToNumber = (price: string) =>
  parseFloat(price.replace("R$", "").trim().replace(",", "."));

export const getCartSubtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + parsePriceToNumber(item.price) * item.quantity, 0);

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
          }));
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "dark-burguer-cart",
    },
  ),
);
