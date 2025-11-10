/**
 * @service productService
 * @summary Service for managing product data with mocked data
 * @domain product
 * @type mock-service
 * @category data-management
 */

import type { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate Premium',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    price: 89.9,
    originalPrice: 119.9,
    rating: 4.8,
    reviewCount: 127,
    description: 'Delicioso bolo de chocolate com cobertura cremosa',
    available: true,
    category: 'chocolate',
    size: 'grande',
    flavor: 'chocolate',
  },
  {
    id: '2',
    name: 'Bolo Red Velvet',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop',
    price: 95.0,
    rating: 4.9,
    reviewCount: 89,
    description: 'Clássico bolo red velvet com cream cheese',
    available: true,
    category: 'especial',
    size: 'medio',
    flavor: 'red-velvet',
  },
  {
    id: '3',
    name: 'Bolo de Cenoura com Chocolate',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop',
    price: 65.0,
    originalPrice: 85.0,
    rating: 4.7,
    reviewCount: 203,
    description: 'Tradicional bolo de cenoura com cobertura de chocolate',
    available: true,
    category: 'tradicional',
    size: 'grande',
    flavor: 'cenoura',
  },
  {
    id: '4',
    name: 'Bolo de Morango',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
    price: 110.0,
    rating: 4.6,
    reviewCount: 156,
    description: 'Bolo recheado com morangos frescos e chantilly',
    available: true,
    category: 'frutas',
    size: 'grande',
    flavor: 'morango',
  },
  {
    id: '5',
    name: 'Bolo de Limão',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=400&h=400&fit=crop',
    price: 72.0,
    rating: 4.5,
    reviewCount: 94,
    description: 'Refrescante bolo de limão com cobertura cítrica',
    available: true,
    category: 'frutas',
    size: 'medio',
    flavor: 'limao',
  },
  {
    id: '6',
    name: 'Bolo Floresta Negra',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop',
    price: 125.0,
    originalPrice: 155.0,
    rating: 4.9,
    reviewCount: 178,
    description: 'Sofisticado bolo com cerejas e chocolate',
    available: true,
    category: 'especial',
    size: 'grande',
    flavor: 'chocolate',
  },
  {
    id: '7',
    name: 'Bolo de Coco',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=400&fit=crop',
    price: 68.0,
    rating: 4.4,
    reviewCount: 112,
    description: 'Bolo macio de coco com cobertura de coco ralado',
    available: true,
    category: 'tradicional',
    size: 'medio',
    flavor: 'coco',
  },
  {
    id: '8',
    name: 'Bolo de Nozes',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=400&fit=crop',
    price: 98.0,
    rating: 4.7,
    reviewCount: 87,
    description: 'Bolo artesanal com nozes e mel',
    available: false,
    category: 'especial',
    size: 'medio',
    flavor: 'nozes',
  },
  {
    id: '9',
    name: 'Bolo de Banana',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=400&fit=crop',
    price: 58.0,
    rating: 4.3,
    reviewCount: 145,
    description: 'Bolo caseiro de banana com canela',
    available: true,
    category: 'tradicional',
    size: 'pequeno',
    flavor: 'banana',
  },
  {
    id: '10',
    name: 'Bolo Ópera',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop',
    price: 145.0,
    rating: 5.0,
    reviewCount: 67,
    description: 'Sofisticado bolo francês com camadas de café e chocolate',
    available: true,
    category: 'especial',
    size: 'medio',
    flavor: 'cafe',
  },
  {
    id: '11',
    name: 'Bolo de Maracujá',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop',
    price: 78.0,
    originalPrice: 98.0,
    rating: 4.6,
    reviewCount: 134,
    description: 'Bolo tropical de maracujá com mousse',
    available: true,
    category: 'frutas',
    size: 'medio',
    flavor: 'maracuja',
  },
  {
    id: '12',
    name: 'Bolo de Fubá',
    image: 'https://images.unsplash.com/photo-1586985289565-b7d4c0c5e8e0?w=400&h=400&fit=crop',
    price: 52.0,
    rating: 4.5,
    reviewCount: 198,
    description: 'Tradicional bolo de fubá cremoso',
    available: true,
    category: 'tradicional',
    size: 'grande',
    flavor: 'fuba',
  },
];

export const productService = {
  /**
   * @method getAll
   * @summary Returns all products from mock data
   */
  getAll(): Product[] {
    return MOCK_PRODUCTS;
  },

  /**
   * @method getById
   * @summary Returns a single product by ID
   */
  getById(id: string): Product | undefined {
    return MOCK_PRODUCTS.find((product) => product.id === id);
  },
};
