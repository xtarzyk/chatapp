import { IsString } from "class-validator"

export class CreateMessageDto {
    @IsString()
    readonly roomName: string

    @IsString()
    readonly userName: string

    @IsString()
    readonly text: string
}
