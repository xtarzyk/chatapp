import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from 'src/libs/entities/message.entity'
import { Room } from 'src/libs/entities/room.entity'
import { User } from 'src/libs/entities/user.entity'
import { MessageService } from '../message/message.service'
import { RoomService } from '../room/index'
import { UserService } from '../user/index'
import { ChatGateway } from './chat.gateway'

@Module({
  imports: [TypeOrmModule.forFeature([Room, Message, User])],
  providers: [ChatGateway, MessageService, RoomService, UserService]
})
export class ChatModule {}
