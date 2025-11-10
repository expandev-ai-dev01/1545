/**
 * @module useProductList/types
 * @summary Type definitions for useProductList hook
 * @domain product
 */

import type { Product, SortOption } from '../../types';

export interface UseProductListOptions {
  initialItemsPerPage?: number;
  initialSort?: SortOption;
}

export interface UseProductListReturn {
  products: Product[];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalProducts: number;
  sortOption: SortOption;
  isLoading: boolean;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  setSortOption: (sort: SortOption) => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}
