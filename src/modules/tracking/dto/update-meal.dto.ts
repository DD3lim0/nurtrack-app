import { IsBoolean, IsIn, IsInt, IsString } from "class-validator";


export class UpdateMealDto{

@IsString()
ingredients !: string;

@IsString()
preparedMethod !: string;

@IsInt()
portionSize !: number

@IsBoolean()
completedMeal !: boolean
}