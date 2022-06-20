import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/libs/entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
    constructor(@InjectRepository(Room) private userRepository: Repository<Room>) {}

    async createUser(room: string) {
        const newRoom = this.userRepository.create({ roomName: room})
        return await this.userRepository.save(newRoom)
    }
}
