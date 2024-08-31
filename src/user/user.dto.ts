import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";

export class UserDto {
    
    @IsNotEmpty({message: '名字是必填的'})
    @Transform(({value}) => value.trim())
    name: string

    @IsNotEmpty({message: '邮箱是必填的'})
    email: string

}