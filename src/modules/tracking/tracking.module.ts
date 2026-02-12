import { Module } from "@nestjs/common";
import { diapersController } from "./controllers/diapers.controller";

@Module({
    controllers:[diapersController],
})

export class trackingModule {}