/**
 * @page HomePage
 * @summary Home page displaying product catalog with filters and pagination
 * @domain home
 * @type page-component
 * @category public
 */

import { useState } from 'react';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { useCart } from '@/domain/cart/hooks/useCart';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { ProductControls } from '@/domain/product/components/ProductControls';
import { CartNotification } from '@/domain/cart/components/CartNotification';
import { ShoppingCart } from 'lucide-react';
import { Button, Badge } from '@/core/components';
import type { Product } from '@/domain/product/types';

export const HomePage = () => {
  const {
    products,
    currentPage,
    itemsPerPage,
    totalPages,
    totalProducts,
    sortOption,
    canGoNext,
    canGoPrevious,
    setCurrentPage,
    setItemsPerPage,
    setSortOption,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
  } = useProductList();

  const { addToCart, totalItems } = useCart();

  const [notification, setNotification] = useState<{
    visible: boolean;
    product: Product | null;
  }>({ visible: false, product: null });

  const handleAddToCart = (product: Product) => {
    addToCart({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      price: product.price,
    });

    setNotification({ visible: true, product });
  };

  const handleCloseNotification = () => {
    setNotification({ visible: false, product: null });
  };

  const handleGoToCart = () => {
    handleCloseNotification();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Catálogo de Bolos</h1>
            <Button variant="outline" className="relative">
              <ShoppingCart className="size-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 size-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <ProductControls
            totalProducts={totalProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            sortOption={sortOption}
            canGoNext={canGoNext}
            canGoPrevious={canGoPrevious}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            onSortChange={setSortOption}
            onFirstPage={goToFirstPage}
            onLastPage={goToLastPage}
            onNextPage={goToNextPage}
            onPreviousPage={goToPreviousPage}
          />

          <ProductGrid products={products} onAddToCart={handleAddToCart} />

          <ProductControls
            totalProducts={totalProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            sortOption={sortOption}
            canGoNext={canGoNext}
            canGoPrevious={canGoPrevious}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            onSortChange={setSortOption}
            onFirstPage={goToFirstPage}
            onLastPage={goToLastPage}
            onNextPage={goToNextPage}
            onPreviousPage={goToPreviousPage}
          />
        </div>
      </main>

      {notification.product && (
        <CartNotification
          productName={notification.product.name}
          productImage={notification.product.image}
          productPrice={notification.product.price}
          isVisible={notification.visible}
          onClose={handleCloseNotification}
          onGoToCart={handleGoToCart}
        />
      )}
    </div>
  );
};

export default HomePage;
