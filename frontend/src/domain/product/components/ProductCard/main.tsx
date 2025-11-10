/**
 * @component ProductCard
 * @summary Displays product information in a card format with add to cart functionality
 * @domain product
 * @type domain-component
 * @category product-display
 */

import { Star, ShoppingCart } from 'lucide-react';
import { Button, Badge } from '@/core/components';
import type { ProductCardProps } from './types';

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="size-4 fill-yellow-400 text-yellow-400"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
        );
      } else {
        stars.push(<Star key={i} className="size-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="group relative flex flex-col bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {discountPercentage > 0 && (
        <Badge variant="destructive" className="absolute top-2 left-2 z-10 font-bold">
          -{discountPercentage}%
        </Badge>
      )}

      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
          <span className="text-xs text-muted-foreground ml-1">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">
          {product.description}
        </p>

        <div className="flex flex-col gap-1">
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xl font-bold text-primary">R$ {product.price.toFixed(2)}</span>
        </div>

        <Button
          className="w-full mt-2"
          disabled={!product.available}
          onClick={() => onAddToCart?.(product)}
        >
          {product.available ? (
            <>
              <ShoppingCart className="size-4" />
              Adicionar ao Carrinho
            </>
          ) : (
            'Indisponível'
          )}
        </Button>
      </div>
    </div>
  );
};
