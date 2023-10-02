import { Messages } from '../services/messages';
import { OrderRepository } from '../services/order-repository';
import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from '../types/order-status';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messages: Messages,
    private readonly repository: OrderRepository,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.messages.sendMessage(
      'Seu pedido foi recebido. ' +
        `Total: R$ ${this.cart.totalWithDiscount()}`,
    );
    this.repository.saveOrder();
    this.cart.clear();
  }
}
