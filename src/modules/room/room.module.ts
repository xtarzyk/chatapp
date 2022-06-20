import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from 'src/libs/entities/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomGateway } from './room.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService, RoomGateway],
  controllers: []
})
export class RoomModule {}
