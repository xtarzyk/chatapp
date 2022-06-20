import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Room } from './room.entity'
import { User } from './user.entity'

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  messageId: number

  @Column()
  roomId: number

  @Column()
  userId: number

  @Column()
  text: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => User, user => user.messages)
  @JoinColumn({ name: 'userId'})
  user: Array<Room>

  @ManyToOne(() => Room, room => room.messages)
  @JoinColumn({ name: 'roomId'})
  room: Array<Room>
}
