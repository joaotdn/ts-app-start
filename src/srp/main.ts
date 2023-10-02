import { Messages } from './services/messages';
import { Order } from './entities/order';
import { OrderRepository } from './services/order-repository';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const messages = new Messages();
const orderRepository = new OrderRepository();

const cart = new ShoppingCart();
const order = new Order(cart, messages, orderRepository);

cart.addItem(new Product('Camiseta', 20.9));
cart.addItem(new Product('Caneca', 10.5));
cart.addItem(new Product('Lápis', 1.6));

console.log(cart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
