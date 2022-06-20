import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/libs/entities/user.entity';
import { UserGateway } from './user.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserGateway],
  controllers: []
})
export class UserModule {}
