import { Controller, Get, HttpCode, Post } from "@nestjs/common";


@Controller('diapers')

export class diapersController{

    @Get()
    findAllDiapers():string{
        return "returned all of  this childs diapers";
    }

    @Post()
    create():string{

        return "logged a new diaper change";
    }

}