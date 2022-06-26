import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { Message } from 'src/libs/entities/message.entity'
import { MessageService } from '../message/index'
import { RoomService } from '../room/index'
import { UserService } from '../user'

@WebSocketGateway({
  cors: {
    origin: '*' 
  }
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private messagesService: MessageService,
    private roomService: RoomService,
    private userService: UserService
  ) {}

  @WebSocketServer() server: Server

  afterInit(server: Server) {
    console.log('Initialized!', server)
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`)
  }

  @SubscribeMessage('room')
  async addRoom(client: Socket, room: string) {
    await this.roomService.createRoom(room)
      .catch(err => console.log(err))
    
    client.join(room)

    const roomData = await this.roomService.findByName(room)
    this.server.emit('getRoomData', roomData)
  }

  @SubscribeMessage('name')
  async addUser(client: Socket, name: string) {
    await this.userService.createUser(name)
      .catch(err => console.log(err))
      
    const userData = await this.userService.findByName(name)
    this.server.emit('getUserData', userData)
  }

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
