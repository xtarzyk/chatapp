import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'libs/entities/message.entity';
import { Room } from 'libs/entities/room.entity';
import { User } from 'libs/entities/user.entity';
import { MessageModule } from './modules/message/message.module';
import { RoomModule } from './modules/room/room.module';
import { UserModule } from './modules/user/user.module';

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
      synchronize: true,
    }),
    MessageModule,
    UserModule,
    RoomModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
