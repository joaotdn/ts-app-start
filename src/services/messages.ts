import { MessagesProtocol } from '../interfaces/messages-protocol';

export class Messages implements MessagesProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
