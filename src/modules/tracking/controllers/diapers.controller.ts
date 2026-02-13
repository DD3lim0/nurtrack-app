import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { CreateDiaperDto } from "../dto/create-diaper.dto";
import { CreateGrowthItemDto } from "../dto/create-growth.dto";


@Controller('diapers')

export class DiapersController{

    @Get()
    findAll():string{
        return "returned all of  this childs diapers";
    }

    @Post(":childId")

    create( @Param('childId') childId:string, @Body() dto : CreateDiaperDto):string
    {
        return "logged a new diaper change";
    }

    @Put(':childId')
    update(@Param('childId') childId:string , @Body() dto : CreateGrowthItemDto ):string {
        return "updated diaper change";
    }

    @Delete()
    delete():any{
        return "deleted diaper change";
    }

}