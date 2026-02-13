import { IsOptional, IsString } from "class-validator"


export class UpdateDiaperDto{

    @IsOptional()
    color?:string;
    @IsOptional()
    consistency?:string;
    @IsOptional()
    concerns?:string;

}