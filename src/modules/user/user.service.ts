import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/libs/entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(name: string) {
        const newUser = await this.userRepository.create({ userName: name })
        return this.userRepository.save(newUser)
    }

    findByName(name: string) {
        return this.userRepository.findOne({ where: { userName: name }})
    }
}
