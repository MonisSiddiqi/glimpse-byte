import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class CreatePageDto {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @Length(8)
    password: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string
}
