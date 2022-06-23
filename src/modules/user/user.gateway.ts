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
  async addUser(client: Socket, name: string) {
    await this.userService.createUser(name)
      .catch(err => console.log(err))
      
    const userData = await this.userService.findByName(name)
    this.server.emit('getUserData', userData)
  }

  // @SubscribeMessage('userName')
  // async getUserData(client: Socket, name: string) {
  //   const userData = await this.userService.findByName(name)
  //   this.server.emit('getUserData', userData)
  // }
}
