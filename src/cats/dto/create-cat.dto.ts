
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}
