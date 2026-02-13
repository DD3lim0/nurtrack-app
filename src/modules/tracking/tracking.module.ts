import { Module } from "@nestjs/common";
import { DiapersController } from "./controllers/diapers.controller";
import { GrowthController } from "./controllers/growth.controller";
import { MealController } from "./controllers/meals.controller";

@Module({
    controllers:[DiapersController, GrowthController,MealController],
    providers: [], 
    imports:[],
    exports:[]
})

export class trackingModule {}