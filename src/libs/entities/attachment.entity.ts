import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn('uuid')
  attachmentId: number

  @Column()
  messageId: number

  @Column()
  path: string
}