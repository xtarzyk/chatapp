import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  roomId: number

  @Column()
  roomName: string
}