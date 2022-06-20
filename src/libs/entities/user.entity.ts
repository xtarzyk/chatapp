import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Message } from './message.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: number

  @Column({ unique: true })
  userName: string

  @OneToMany(() => Message, message => message.user)
  messages: Array<Message>
}