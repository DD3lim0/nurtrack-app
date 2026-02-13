import { IsBoolean, IsInt, IsString } from "class-validator";


export class CreateMealDto{

@IsString()
childId !: string;

@IsString()
ingredients !: string;

@IsString()
preparedMethod !: string;

@IsInt()
portionSize !: number

@IsBoolean()
completedMeal !: boolean
}