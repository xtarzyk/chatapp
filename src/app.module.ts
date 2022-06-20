import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/libs/entities/message.entity';
import { Room } from 'src/libs/entities/room.entity';
import { User } from 'src/libs/entities/user.entity';
import { MessageModule } from './modules/message/index';
import { RoomModule } from './modules/room/index';
import { UserModule } from './modules/user/index';
import { UserGateway } from './modules/user/user.gateway';
import { RoomGateway } from './modules/room/room.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'kajtek123',
      database: 'chat',
      entities: [Room, User, Message],
      synchronize: false,
    }),
    MessageModule,
    UserModule,
    RoomModule
  ],
  controllers: [],
  providers: [UserGateway, RoomGateway],
})
export class AppModule {}
