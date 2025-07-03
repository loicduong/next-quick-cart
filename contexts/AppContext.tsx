'use client'

import { Product } from "@/types/product";
import { createContext, useContext, useState, useEffect } from "react";
import productsDummyData from "@/assets/dummies/products";
import { useRouter } from "next/navigation";

interface AppContextType {
  products: Product[];
  router: ReturnType<typeof useRouter>;
  cartItems: Record<string, number>;
  setCartItems: (cartItems: Record<string, number>) => void;
  addToCart: (itemId: string) => void;
  getCartCount: () => number;
  currency?: string;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  return useContext(AppContext) as AppContextType
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const [products, setProducts] = useState<Product[]>([]);

  const [cartItems, setCartItems] = useState<Record<string, number>>({})

  const currency = process.env.NEXT_PUBLIC_CURRENCY

  const fetchProductData = async () => {
    setProducts(productsDummyData)
  }

  const addToCart = async (itemId: string) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        totalCount += cartItems[items];
      }
    }
    return totalCount;
  }

  useEffect(() => {
    fetchProductData()
  }, [products.length]);

  return (
    <AppContext.Provider value={{
      products,
      router,
      cartItems,
      setCartItems,
      addToCart,
      getCartCount,
      currency
    }}>
      {children}
    </AppContext.Provider>
  )
};