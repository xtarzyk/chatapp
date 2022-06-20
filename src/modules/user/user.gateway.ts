import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { User } from 'src/libs/entities/user.entity'
import { UserService } from './user.service'

@WebSocketGateway({  
  cors: {
  origin: '*'
  }
})
export class UserGateway {
  constructor(private userService: UserService) {}

  @WebSocketServer() server: Server;
  
  @SubscribeMessage('name')
  async addUser(client: Socket, payload: string) {
    await this.userService.createUser(payload)
    this.server.emit(payload)
  }
}
