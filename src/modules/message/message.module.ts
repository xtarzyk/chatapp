import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from 'src/libs/entities/message.entity'
import { MessageService } from './message.service'

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [],
  providers: [MessageService]
})
export class MessageModule {}
