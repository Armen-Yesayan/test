import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {DatabaseDto} from "./dto/database.dto";
import {DatabaseService} from "./database.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('database')
export class DatabaseController {

    constructor(private readonly databaseServer: DatabaseService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    allDB() {
        return this.databaseServer.allDB();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    create(@Body() dto: DatabaseDto) {
        return this.databaseServer.create(dto);
    }
}
