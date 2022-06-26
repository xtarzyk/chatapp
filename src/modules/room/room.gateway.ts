import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Room } from 'src/libs/entities/room.entity';
import { Server } from 'typeorm';
import { RoomService } from './room.service';

@WebSocketGateway()
export class RoomGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  constructor(private roomService: RoomService) {}

  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log(server)
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client}`)
  }
  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client}`)
  }
  
  @SubscribeMessage('room')
  async addUser(client: Socket, room: string) {
    await this.roomService.createUser(room)
      .catch(err => console.log(err))
      
    const roomData = await this.roomService.findByName(room)
    this.server.emit('getRoomData', roomData)
  }
}
