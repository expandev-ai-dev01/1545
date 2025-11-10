/**
 * @module ProductControls/types
 * @summary Type definitions for ProductControls component
 * @domain product
 */

import type { SortOption } from '../../types';

export interface ProductControlsProps {
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortOption: SortOption;
  canGoNext: boolean;
  canGoPrevious: boolean;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sort: SortOption) => void;
  onFirstPage: () => void;
  onLastPage: () => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
}
