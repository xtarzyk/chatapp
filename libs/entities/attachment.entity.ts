import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Message } from './message.entity'

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn('uuid')
  attachmentId: number

  @Column()
  messageId: number

  @Column()
  path: string
}