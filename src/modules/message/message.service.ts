import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/libs/entities/message.entity';
import { Room } from 'src/libs/entities/room.entity';
import { User } from 'src/libs/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message) private messageRepository: Repository<Message>,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Room) private roomRepository: Repository<Room>
        
        ) {}
    
    async getMessages() {
        return await this.messageRepository.find()
    }
    
    async createMessage(message: Message) {
        return await this.messageRepository.save(message)
    }
}
