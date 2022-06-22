import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/libs/entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
    constructor(@InjectRepository(Room) private roomRepository: Repository<Room>) {}

    async createUser(room: string) {
        const newRoom = this.roomRepository.create({ roomName: room})
        return await this.roomRepository.save(newRoom)
    }

    findByName(room: string) {
        return this.roomRepository.findOne({ where: { roomName: room }})
    }
}
