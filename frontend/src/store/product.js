// This is where we store our global state for products and the functions associated with them.

import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}))