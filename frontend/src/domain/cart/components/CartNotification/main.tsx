/**
 * @component CartNotification
 * @summary Toast notification displayed when product is added to cart
 * @domain cart
 * @type domain-component
 * @category cart-feedback
 */

import { useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '@/core/components';
import type { CartNotificationProps } from './types';

export const CartNotification = ({
  productName,
  productImage,
  productPrice,
  isVisible,
  onClose,
  onGoToCart,
}: CartNotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in-0">
      <div className="bg-card border rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-100">
            <img src={productImage} alt={productName} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-semibold line-clamp-2">{productName}</p>
                <p className="text-sm text-primary font-bold mt-1">R$ {productPrice.toFixed(2)}</p>
              </div>
              <Button variant="ghost" size="icon-sm" onClick={onClose} className="flex-shrink-0">
                <X className="size-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-2">Produto adicionado ao carrinho!</p>

            <Button variant="outline" size="sm" onClick={onGoToCart} className="mt-3 w-full">
              <ShoppingCart className="size-4" />
              Ver Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
