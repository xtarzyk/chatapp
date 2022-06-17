import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'kajtek123',
      database: 'chat',
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
