/**
 * @component ProductControls
 * @summary Controls for pagination and sorting of products
 * @domain product
 * @type domain-component
 * @category product-navigation
 */

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/core/components';
import type { ProductControlsProps } from './types';
import type { SortOption } from '../../types';

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'relevancia', label: 'Relevância' },
  { value: 'preco_crescente', label: 'Menor Preço' },
  { value: 'preco_decrescente', label: 'Maior Preço' },
  { value: 'nome_az', label: 'Nome (A-Z)' },
  { value: 'nome_za', label: 'Nome (Z-A)' },
  { value: 'avaliacao', label: 'Melhor Avaliação' },
];

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48];

export const ProductControls = ({
  totalProducts,
  currentPage,
  totalPages,
  itemsPerPage,
  sortOption,
  canGoNext,
  canGoPrevious,
  onPageChange,
  onItemsPerPageChange,
  onSortChange,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPreviousPage,
}: ProductControlsProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ordenar por:</span>
            <Select value={sortOption} onValueChange={onSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Exibir:</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => onItemsPerPageChange(Number(value))}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option.toString()}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Mostrando {startItem}-{endItem} de {totalProducts} produtos
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" onClick={onFirstPage} disabled={!canGoPrevious}>
          <ChevronsLeft className="size-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onPreviousPage} disabled={!canGoPrevious}>
          <ChevronLeft className="size-4" />
        </Button>

        <div className="flex items-center gap-2 px-4">
          <span className="text-sm font-medium">
            Página {currentPage} de {totalPages}
          </span>
        </div>

        <Button variant="outline" size="icon" onClick={onNextPage} disabled={!canGoNext}>
          <ChevronRight className="size-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onLastPage} disabled={!canGoNext}>
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};
