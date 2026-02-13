import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('meals')

export class MealController{

 @Get()
    readChildData():string{

        return "Your child likes these foods ";
    }

@Post()
    create():string  {
        return "You submitted a inquiry on your childs growth"
    }

@Put()

    update():string{
        return "updated the you meal data"
    }

@Delete()
        delete():string{
        return "deleted inquiry meals"

    }
    
}