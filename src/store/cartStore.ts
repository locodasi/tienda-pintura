import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  products: Record<string, CartItem>;
  addToCart: (product: Product) => void;
  decreaseFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: {},
      addToCart: (product) => {
        const { products } = get();
        const id = product.id;
        set({
          products: {
            ...products,
            [id]: {
              product,
              quantity: (products[id]?.quantity || 0) + 1,
            },
          },
        });
      },
      decreaseFromCart: (id) => {
        const { products } = get();
        if (!products[id]) return;
        const quantity = products[id].quantity - 1;
        const updated = { ...products };
        if (quantity <= 0) delete updated[id];
        else updated[id] = { ...updated[id], quantity };
        set({ products: updated });
      },
      removeFromCart: (id) => {
        const { products } = get();
        const updated = { ...products };
        delete updated[id];
        set({ products: updated });
      },
      clearCart: () => set({ products: {} }),
      totalCount: () =>
        Object.values(get().products).reduce((a, i) => a + i.quantity, 0),
    }),
    { name: "cart-storage" } // <- localStorage key
  )
);
