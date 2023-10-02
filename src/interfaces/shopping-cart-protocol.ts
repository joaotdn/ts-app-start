import { CartItem } from '../interfaces/cart-item';

export interface ShoppingCartProtocol {
  addItem(item: CartItem): void;

  remove(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
