import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem } from "../data/types.produtos";

// Tipo para item do carrinho (produto + quantidade)
export interface CartItem extends MenuItem {
  quantity: number;
}

// Tipo do contexto
interface CartContextType {
  items: CartItem[];
  addToCart: (product: MenuItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

// Criar o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component (envolve a app)
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Adicionar ao carrinho
  const addToCart = (product: MenuItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Se já existe, aumenta quantidade
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // Se não existe, adiciona novo
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remover do carrinho
  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Atualizar quantidade
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  // Limpar carrinho
  const clearCart = () => {
    setItems([]);
  };

  // Calcular total
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("R$ ", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
}
