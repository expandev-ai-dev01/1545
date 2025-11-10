/**
 * @hook useProductList
 * @summary Manages product listing with pagination and sorting
 * @domain product
 * @type domain-hook
 * @category data-management
 */

import { useState, useMemo, useCallback } from 'react';
import { productService } from '../../services/productService';
import type { Product, SortOption } from '../../types';
import type { UseProductListOptions, UseProductListReturn } from './types';

export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const { initialItemsPerPage = 12, initialSort = 'relevancia' } = options;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);

  const allProducts = useMemo(() => productService.getAll(), []);

  const sortedProducts = useMemo(() => {
    const products = [...allProducts];

    switch (sortOption) {
      case 'preco_crescente':
        return products.sort((a, b) => a.price - b.price);
      case 'preco_decrescente':
        return products.sort((a, b) => b.price - a.price);
      case 'nome_az':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'nome_za':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case 'avaliacao':
        return products.sort((a, b) => b.rating - a.rating);
      case 'relevancia':
      default:
        return products.sort((a, b) => {
          const scoreA = a.reviewCount * 0.3 + a.rating * 0.7;
          const scoreB = b.reviewCount * 0.3 + b.rating * 0.7;
          return scoreB - scoreA;
        });
    }
  }, [allProducts, sortOption]);

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const products = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  const handleSetItemsPerPage = useCallback((items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  }, []);

  const handleSetSortOption = useCallback((sort: SortOption) => {
    setSortOption(sort);
    setCurrentPage(1);
  }, []);

  const goToFirstPage = useCallback(() => setCurrentPage(1), []);
  const goToLastPage = useCallback(() => setCurrentPage(totalPages), [totalPages]);
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  return {
    products,
    currentPage,
    itemsPerPage,
    totalPages,
    totalProducts,
    sortOption,
    isLoading: false,
    setCurrentPage,
    setItemsPerPage: handleSetItemsPerPage,
    setSortOption: handleSetSortOption,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
  };
};
