import { OrderStatus } from '../types/order-status';
import { CustomerOrder } from '../interfaces/customer-protocol';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { MessagesProtocol } from '../interfaces/messages-protocol';
import { OrderRepositoryProtocol } from '../interfaces/order-repository-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messages: MessagesProtocol,
    private readonly repository: OrderRepositoryProtocol,
    private readonly customer: CustomerOrder,
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
      `Cliente: ${this.customer.getName()} - Documento: ${this.customer.getDoc()}`,
    );
    this.messages.sendMessage(
      'Seu pedido foi recebido. ' +
        `Total: R$ ${this.cart.totalWithDiscount()}`,
    );
    this.repository.saveOrder();
    this.cart.clear();
  }
}
