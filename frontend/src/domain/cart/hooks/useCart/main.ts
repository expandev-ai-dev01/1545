/**
 * @hook useCart
 * @summary Hook for managing cart operations
 * @domain cart
 * @type domain-hook
 * @category cart-management
 */

import { useCartStore } from '../../stores/cartStore';
import type { UseCartReturn } from './types';

export const useCart = (): UseCartReturn => {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return {
    items,
    totalItems: getTotalItems(),
    totalPrice: getTotalPrice(),
    addToCart: addItem,
    removeFromCart: removeItem,
    updateQuantity,
    clearCart,
  };
};
