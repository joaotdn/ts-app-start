import { RepositoryProtocol } from '../interfaces/repository-protocol';

export class OrderRepository implements RepositoryProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
