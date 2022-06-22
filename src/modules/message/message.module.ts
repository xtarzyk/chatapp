import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/libs/entities/message.entity';
import { Room } from 'src/libs/entities/room.entity';
import { User } from 'src/libs/entities/user.entity';
import { MessageGateway } from './message.gateway';
import { MessageService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Room, User])],
  controllers: [],
  providers: [MessageService, MessageGateway]
})
export class MessageModule {}
