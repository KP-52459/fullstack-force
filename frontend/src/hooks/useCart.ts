import { useState, useEffect, useCallback } from "react";
import { getCart, getCartCount, getCartTotal, subscribeToCart } from "@/services/cartService";
import { CartItem } from "@/services/types";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(getCart());
  const [count, setCount] = useState(getCartCount());
  const [total, setTotal] = useState(getCartTotal());

  useEffect(() => {
    const unsubscribe = subscribeToCart(() => {
      setCart(getCart());
      setCount(getCartCount());
      setTotal(getCartTotal());
    });
    return unsubscribe;
  }, []);

  return { cart, count, total };
}
