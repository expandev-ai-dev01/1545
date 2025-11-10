/**
 * @module CartNotification/types
 * @summary Type definitions for CartNotification component
 * @domain cart
 */

export interface CartNotificationProps {
  productName: string;
  productImage: string;
  productPrice: number;
  isVisible: boolean;
  onClose: () => void;
  onGoToCart: () => void;
}
