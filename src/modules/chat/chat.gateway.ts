import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { MessageService } from '../message/index'
import { RoomService } from '../room/index'
import { UserService } from '../user'

@WebSocketGateway({
  cors: {
    origin: '*' 
  }
})
export class ChatGateway {
  constructor(
    private messagesService: MessageService,
    private roomService: RoomService,
    private userService: UserService
  ) {}

  @WebSocketServer() server: Server

  
}
