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
  
@WebSocketGateway({
    cors: { 
      origin: '*' 
    }
})
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    
    constructor(private messageService: MessageService) {}
  
    @WebSocketServer() server: Server;
    
    afterInit(server: Server) {
      console.log(server)
    }
    handleConnection(client: Socket, ...args: any[]) {
      console.log(`Connected ${client.id}`)
    }
    handleDisconnect(client: Socket) {
      console.log(`Disconnected: ${client.id}`)
    }
  
    @SubscribeMessage('createMessage')
    handleMessage(client: Socket, text: string) {
      return { event: 'messageToClient', data: text }
    }
}
  