import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('growth')

export class GrowthController{
    @Get()
    read():string{
        return "returning all child growth logs"
    }

    @Post()
    create():string{
        return "added chlid's age and height"
    }

    @Put()
    update():string{
        return "updated growth inquiry"
    }

    @Delete()
    delete(): string {
        return "growth data has been removed"
    }

}