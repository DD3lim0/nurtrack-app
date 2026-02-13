
import { IsString } from 'class-validator';

export class CreateDiaperDto{

    @IsString()
    color!: string;
    @IsString()
    consistency!: string;
    @IsString()
    concerns!:string;
    @IsString()
    childId!: string;
}