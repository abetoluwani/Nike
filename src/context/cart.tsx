import type { Product } from "@/data/products";

import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

export type CartItem = {
    id: string; // unique key: productId + variant signature
    productId: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    size?: string;
    color?: string;
};

type CartContextType = {
    items: CartItem[];
    count: number;
    subtotal: number;
    addItem: (
        product: Product,
        opts?: { size?: string; color?: string; quantity?: number },
    ) => void;
    removeItem: (id: string) => void;
    clear: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "cart:v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);

            return raw ? (JSON.parse(raw) as CartItem[]) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // ignore
        }
    }, [items]);

    const addItem: CartContextType["addItem"] = (product, opts = {}) => {
        const { size, color, quantity = 1 } = opts;
        const key = `${product.id}|${size ?? "_"}|${color ?? "_"}`;

        setItems((prev) => {
            const existing = prev.find((i) => i.id === key);
            if (existing) {

                return prev.map((i) =>
                    i.id === key ? { ...i, quantity: i.quantity + quantity } : i,
                );
            }

            return [
                ...prev,
                {
                    id: key,
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity,
                    size,
                    color,
                },
            ];
        });
    };

    const removeItem = (id: string) =>
        setItems((prev) => prev.filter((i) => i.id !== id));

    const clear = () => setItems([]);

    const { count, subtotal } = useMemo(() => {
        const count = items.reduce((acc, i) => acc + i.quantity, 0);
        const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

        return { count, subtotal };
    }, [items]);

    const value: CartContextType = {
        items,
        count,
        subtotal,
        addItem,
        removeItem,
        clear,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);

    if (!ctx) throw new Error("useCart must be used within CartProvider");

    return ctx;
}
