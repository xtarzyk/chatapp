import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Message } from './message.entity'

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  roomId: number

  @Column()
  roomName: string

  @OneToMany(() => Message, message => message.room)
  messages: Array<Message>
}