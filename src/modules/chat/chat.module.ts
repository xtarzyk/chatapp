import { Module } from '@nestjs/common'
import { MessageService } from '../message/message.service'
import { RoomService } from '../room/room.service'
import { UserService } from '../user/user.service'
import { ChatGateway } from './chat.gateway'

@Module({
  providers: [ChatGateway, MessageService, RoomService, UserService]
})
export class ChatModule {}
