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
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    constructor(private messagesService: MessageService) {}
  
    @WebSocketServer() server: Server
    
    afterInit(server: Server) {
      console.log(server)
    }
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Connected ${client.id}`)
    }
    handleDisconnect(client: Socket) {
      console.log(`Disconnected: ${client.id}`)
    }

    @SubscribeMessage('findAllMessages')
    findAll() {
      return this.messagesService.getMessages()
    }

    @SubscribeMessage('sendMessage')
    async handleSendMessage(client: Socket, payload: Message) {
      await this.messagesService.createMessage(payload)
      this.server.emit('receiveMessage', payload)
    }
}
  