/**
 * @module useCart/types
 * @summary Type definitions for useCart hook
 * @domain cart
 */

import type { CartItem } from '../../types';

export interface UseCartReturn {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
