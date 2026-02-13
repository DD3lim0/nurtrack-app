import { IsOptional } from "class-validator";



export class UpdateGrowthItemDto{

    @IsOptional()
    weight ?: number;
    
    @IsOptional()
    height ?: number ;

}