import { Messages } from './services/messages';
import { Order } from './classes/order';
import { OrderRepository } from './services/order-repository';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const messages = new Messages();
const orderRepository = new OrderRepository();
const individualCustomer = new IndividualCustomer(
  'Joao',
  'Teodoro',
  '05304940404',
);

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const order = new Order(cart, messages, orderRepository, individualCustomer);

cart.addItem(new Product('Camiseta', 20.9));
cart.addItem(new Product('Caneca', 10.5));
cart.addItem(new Product('Lápis', 1.6));

console.log(cart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
