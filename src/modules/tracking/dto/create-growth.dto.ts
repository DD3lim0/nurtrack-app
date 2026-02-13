import { IsInt, IsString } from "class-validator";


export class CreateGrowthItemDto{

    @IsString()
    childId!: string;

    @IsInt()
    weight!: number;

    @IsInt()
    height !: number;

}