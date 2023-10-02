import { Product } from './product';
export class ShoppingCart {
  private readonly _items: Product[] = [];

  get items(): Readonly<Product[]> {
    return this._items;
  }

  addItem(item: Product): void {
    this._items.push(item);
  }

  remove(index: number): void {
    this._items.slice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
