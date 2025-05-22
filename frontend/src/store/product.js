// This is where we store our global state for products and the functions associated with them.

import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created successfully" };
    },
    fetchProducts: async () => {
        try {
            const res = await fetch("/api/products");
            if (!res.ok) {
                const errorData = await res.json();
                console.error("Fetch error:", errorData.message);
                return;
            }

            const data = await res.json();
            set({ products: data.data });
        } catch (error) {
            console.error("Network error in fetchProducts:", error.message);
        }
    },
    deleteProduct: async (pid) => {
        try {
            const res = await fetch(`/api/products/${pid}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Delete error:", errorData.message);
                return { success: false, message: errorData.message };
            }

            const data = await res.json();

            if (!data.success) {
                return { success: false, message: data.message };
            }
            // This is us updating the state to remove the deleted product from the products page in our UI wihtout having to refresh the page.
            set((state) => ({
                products: state.products.filter((product) => product._id !== pid),
            }));

            return { success: true, message: data.message };
        } catch (err) {
            console.error("Network error in deleteProduct:", err.message);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    },
}))