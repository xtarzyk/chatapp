import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Room } from 'src/libs/entities/room.entity';
import { Server } from 'typeorm';
import { RoomService } from './room.service';

@WebSocketGateway()
export class RoomGateway {
  constructor(private roomService: RoomService) {}

  @WebSocketServer() server: Server;
  
  @SubscribeMessage('room')
  async addUser(client: Socket, payload: string) {
    await this.roomService.createUser(payload)
    this.server.emit(payload)
  }

  @SubscribeMessage('roomName')
  async getUserData(client: Socket, room: string) {
    const roomData = await this.roomService.findByName(room)
    return this.server.emit('getRoomData', roomData)
  }
}
