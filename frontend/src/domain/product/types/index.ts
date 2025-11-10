/**
 * @module product/types
 * @summary Type definitions for product domain
 * @domain product
 */

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  available: boolean;
  category: string;
  size: string;
  flavor: string;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  flavor?: string;
  size?: string;
  available?: boolean;
}

export type SortOption =
  | 'relevancia'
  | 'preco_crescente'
  | 'preco_decrescente'
  | 'nome_az'
  | 'nome_za'
  | 'avaliacao';

export interface PaginationConfig {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
