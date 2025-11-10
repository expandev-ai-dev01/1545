/**
 * @module ProductCard/types
 * @summary Type definitions for ProductCard component
 * @domain product
 */

import type { Product } from '../../types';

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}
