import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'libs/entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
    constructor(@InjectRepository(Message) private messageRepository: Repository<Message>) {}

    async getMessages() {
        return await this.messageRepository.find()
    }

    // getUserName(userId: number) {

    // }
    
    async createMessage(createMessageDto: CreateMessageDto) {
        return await this.messageRepository.save(createMessageDto)
    }
}
