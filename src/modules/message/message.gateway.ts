import { 
    OnGatewayConnection,
    OnGatewayDisconnect, 
    OnGatewayInit, 
    SubscribeMessage, 
    WebSocketGateway, 
    WebSocketServer 
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { MessageService } from './message.service'
import { Message } from 'src/libs/entities/message.entity'
  
@WebSocketGateway({
    cors: {
      origin: '*' 
    }
})
export class MessageGateway {
    constructor(private messagesService: MessageService) {}
  
    @WebSocketServer() server: Server

    @SubscribeMessage('getMessages')
    findAll() {
      return this.messagesService.getMessages()
    }

    @SubscribeMessage('sendMessage')
    async handleSendMessage(client: Socket, payload: Message) {
      await this.messagesService.createMessage(payload)
      this.server.emit('receiveMessage', payload)
    }
}
  