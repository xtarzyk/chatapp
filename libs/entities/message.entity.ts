import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
