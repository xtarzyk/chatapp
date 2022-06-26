import { Module } from '@nestjs/common'
import { RoomService } from './room.service'
import { Room } from 'src/libs/entities/room.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  controllers: []
})
export class RoomModule {}
