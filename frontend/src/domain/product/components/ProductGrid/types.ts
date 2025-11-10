/**
 * @module ProductGrid/types
 * @summary Type definitions for ProductGrid component
 * @domain product
 */

import type { Product } from '../../types';

export interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}
