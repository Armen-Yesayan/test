import {IsNotEmpty, Length} from "class-validator";

export class DatabaseDto {
    @Length(3)
    @IsNotEmpty()
    name: string;
}